import { createContext, useEffect, useReducer } from "react"

import { createAction } from "../../utilities/reducer"

import { onAuthStateChangedListener} from '../../utilities/firebase'

import { createUserDocumentFromAuth } from "../../utilities/firebase"

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
    dispatch: ()=>null
})


const INTITAL_STATE = {
    currentUser: null
}

const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state,action) => {
    const {type,payload} = action

    switch(type){
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default :
            throw new Error(`Unhandled type ${type} in userReducer`)
    }
}


export const UserProvider = ({children}) => {
    //const [currentUser,setCurrentUser] = useState(null)

    const [{currentUser}, dispatch] = useReducer(userReducer,INTITAL_STATE)

    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user))
    }


    const value={currentUser,setCurrentUser}

    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener(async (user) => {
            if(user){
                await createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })

        return unsubscribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}