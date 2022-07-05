import { useState } from "react"

import './index.scss'

import Button from "../Button"

import FormInput from "../FormInput";

import {signInWithGooglePopup,signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utilities/firebase'



const defaultFormFields = {
    email: '',
    password: ''
};


const SignInForm = () => {
    const [formFields, setFormField] = useState(defaultFormFields)
    const {email,password} = formFields

    const resetFormFields = () => {
        setFormField(defaultFormFields)
    }

    const validateCredentials = async (event) => {
        event.preventDefault();
        
        console.log(email,password)
        try{
            const response = await signInAuthUserWithEmailAndPassword(email,password)
            console.log(response)
            resetFormFields()
        }
        catch(error){
            switch (error.code) {
                case 'auth/wrong-password':
                  alert('Incorrect Password ');
                  break;
                case 'auth/user-not-found':
                  alert('User not found with given Email');
                  break;
                default:
                  console.log(error);
            }
        }
    }

    const changeStateObj = (event) => {
        const {name,value} = event.target
        setFormField({...formFields,[name]: value})
    }


    const signInWithGoogle = async () =>{
        const {user} = await signInWithGooglePopup()
        await createUserDocumentFromAuth(user)
    }

    return (
        <div className="sign-up-container">
            <h1>Already have an account</h1>
            <span>Sign In with your email and password</span>
            <form onSubmit={validateCredentials}>
                <FormInput label="Email" type="text" required name="email" value={email} onChange={changeStateObj} />

                <FormInput label="Password" type="password" required name="password" value={password} onChange={changeStateObj} />

                <div className="buttons-container">
                    <Button >SIGN IN</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm