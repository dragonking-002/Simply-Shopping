import { initializeApp } from "firebase/app"

import {getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth'

import {doc,getDoc,getFirestore,setDoc} from 'firebase/firestore'

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

export const createUserDocumentFromAuth = async (userAuthObj,additionalInformation) => {
    const userDocRef = doc(db,'users',userAuthObj.uid)

    const userDetails = await getDoc(userDocRef)

    if(!userDetails.exists()){
        const {displayName,email} = userAuthObj
        const createdAt = new Date()
        try{
            await setDoc(userDocRef,{displayName,email,createdAt,...additionalInformation})
        }
        catch(error){
            console.log(error.message)
        }
    }

    return userDocRef
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