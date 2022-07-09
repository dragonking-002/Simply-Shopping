import { Fragment, useContext } from "react"

import {Outlet} from 'react-router-dom'

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'

import CartIcon from "../../components/CartIcon"

import { UserContext } from "../../contexts/UserProvider/Index"

import { signOutUser } from "../../utilities/firebase"

import CartDropDown from "../../components/CartDropDown"

import { CartContext } from "../../contexts/CartProvider"

import { NavigationContainer,LogoContainer,NavLinks,NavLink } from "./navigation.styles"

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isOpen} = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser? <NavLink to='/auth' onClick={signOutUser}>SIGN OUT</NavLink> : 
                        <NavLink to='/auth'>SIGN IN</NavLink>
                    }
                    <CartIcon />
                </NavLinks>
                {
                    isOpen && <CartDropDown />
                }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default Navigation