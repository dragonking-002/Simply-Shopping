import { initializeApp } from "firebase/app"

import {getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'

import {doc,getDoc,getFirestore,setDoc,collection,writeBatch,getDocs,query} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBQulEYjxeIxr6KBJpMCIKPhpU09gnkWm4",
    authDomain: "simply-shopping-db.firebaseapp.com",
    projectId: "simply-shopping-db",
    storageBucket: "simply-shopping-db.appspot.com",
    messagingSenderId: "974052338696",
    appId: "1:974052338696:web:534fd03b30aa1dc56a35bd"
};

const app = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth(app);

console.log(auth)


export const signInWithGooglePopup = () => signInWithPopup(auth,provider)


export const db=getFirestore(app)


export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {
    const collectionRef = collection(db,collectionKey)
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef,object.title.toLowerCase())
        batch.set(docRef,object)
    })

    await batch.commit()
}


export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db,'categories')
    const q = query(collectionRef)

    const querySnapShot = await getDocs(q)

    const categoryMap = querySnapShot.docs.map(docSnapshot => docSnapshot.data())

    return categoryMap

}


export const createUserDocumentFromAuth = async (userAuthObj,additionalDetails) => {
    const userDocRef = doc(db,'users',userAuthObj.uid)

    const userDetails = await getDoc(userDocRef)

    if(!userDetails.exists()){
        const {displayName,email} = userAuthObj
        const createdAt = new Date()
        try{
            await setDoc(userDocRef,{displayName,email,createdAt,...additionalDetails})
        }
        catch(error){
            console.log(error.message)
        }
    }

    return userDetails
}


export const createAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return ;

    return await createUserWithEmailAndPassword(auth,email,password)
}


export const signInAuthUserWithEmailAndPassword = async (email,password) => {
    if(!email || !password) return ;
    return await signInWithEmailAndPassword(auth,email,password)
}


export const signOutUser = async () => {
    await signOut(auth)
}


export const onAuthStateChangedListener = (callback) => {
    onAuthStateChanged(auth,callback)
}


export const getCurrentUser = () => {
    return new Promise((resolve,reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsubscribe()
                resolve(userAuth)
            }
        )
    })
}