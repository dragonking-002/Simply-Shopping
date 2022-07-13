import { Fragment,useContext } from "react"

import {Outlet} from 'react-router-dom'

import {useSelector} from 'react-redux'

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'

import CartIcon from "../../components/CartIcon"


import { signOutUser } from "../../utilities/firebase"

import CartDropDown from "../../components/CartDropDown"

import { NavigationContainer,LogoContainer,NavLinks,NavLink } from "./navigation.styles"


import { selectCartIcon } from "../../redux-store/cart/cart-selector"

const Navigation = () => {
    const currentUser = useSelector((state) => state.user.currentUser)
    
    const isOpen = useSelector(selectCartIcon)

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
                        currentUser? <NavLink to='/' onClick={signOutUser}>SIGN OUT</NavLink> : 
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