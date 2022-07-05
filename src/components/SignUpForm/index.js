import { useState } from "react"

import './index.scss'

import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utilities/firebase'

import FormInput from "../FormInput"

import Button from "../Button"

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};


const SignUpForm = () => {
    const [formFields, setFormField] = useState(defaultFormFields)
    const {displayName,email,password,confirmPassword} = formFields

    const resetFormFields = () => {
        setFormField(defaultFormFields)
    }

    const submitForm = async (event) => {
        event.preventDefault()

        if(password !== confirmPassword){
            alert("passwords do not match")
            return 
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password)
            await createUserDocumentFromAuth(user,{displayName})
            resetFormFields()
        }
        catch(error){
            if(error.code === 'auth/email-already-in-use') alert("Email already in use")
            else console.log(error)
        }
    }

    const changeStateObj = (event) => {
        const {name,value} = event.target
        setFormField({...formFields,[name]: value})
    }

    return (
        <div className="sign-up-container">
            <h1>Don't have an account?</h1>
            <span>Sign Up with your email and password</span>
            <form onSubmit={submitForm}>
                <FormInput label="Display Name" type="text" required name="displayName" value={displayName} onChange={changeStateObj} />

                <FormInput label="Email" type="text" required name="email" value={email} onChange={changeStateObj} />

                <FormInput label="Password" type="password" required name="password" value={password} onChange={changeStateObj} />

                <FormInput label="Confirm Password" type="password" required name="confirmPassword" value={confirmPassword} onChange={changeStateObj} />

                <Button type="submit">SIGN UP</Button>
            </form>
        </div>
    )
}

export default SignUpForm