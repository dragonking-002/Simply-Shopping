import SignUpForm from "../../components/SignUpForm"

import SignInForm from "../../components/SignInForm"

import { AuthenticationContainer } from "./authentication.styles"

const Authentication = () => {

    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )

}

export default Authentication