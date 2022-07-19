import { useState } from "react"

import { SignInContainer,ButtonsContainer } from "./sign-in-form.styles";

import Button,{BUTTON_TYPE_CLASSES} from "../Button"

import FormInput from "../FormInput";


import { useDispatch } from "react-redux";
import { emailSignInStart, googleSignInStart } from "../../redux-store/user/user-actions";



const defaultFormFields = {
    email: '',
    password: ''
};


const SignInForm = () => {
    const [formFields, setFormField] = useState(defaultFormFields)
    const {email,password} = formFields

    const dispatch = useDispatch()

    const resetFormFields = () => {
        setFormField(defaultFormFields)
    }

    const validateCredentials = async (event) => {
        event.preventDefault();
        
        try{
            dispatch(emailSignInStart(email,password))
            resetFormFields()
        }
        catch(error){
            console.log(error)
        }
    }

    const changeStateObj = (event) => {
        const {name,value} = event.target
        setFormField({...formFields,[name]: value})
    }


    const signInWithGoogle = async () =>{
        dispatch(googleSignInStart())
    }

    return (
        <SignInContainer>
            <h1>Already have an account</h1>
            <span>Sign In with your email and password</span>
            <form onSubmit={validateCredentials}>
                <FormInput label="Email" type="text" required name="email" value={email} onChange={changeStateObj} />

                <FormInput label="Password" type="password" required name="password" value={password} onChange={changeStateObj} />

                <ButtonsContainer>
                    <Button >SIGN IN</Button>
                    <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm