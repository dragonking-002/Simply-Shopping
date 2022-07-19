import { Fragment } from "react"

import {Outlet} from 'react-router-dom'

import {useSelector,useDispatch} from 'react-redux'

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'

import CartIcon from "../../components/CartIcon"



import CartDropDown from "../../components/CartDropDown"

import { NavigationContainer,LogoContainer,NavLinks,NavLink } from "./navigation.styles"


import { selectCartIcon } from "../../redux-store/cart/cart-selector"
import { signOutStart } from "../../redux-store/user/user-actions"

const Navigation = () => {
    const currentUser = useSelector((state) => state.user.currentUser)
    
    const isOpen = useSelector(selectCartIcon)

    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signOutStart())
    }

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
                        currentUser? <NavLink to='/' onClick={handleSignOut}>SIGN OUT</NavLink> : 
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