import { Fragment, useContext } from "react"

import {Link,Outlet} from 'react-router-dom'

import {ReactComponent as CrownLogo} from '../../assets/crown.svg'

import CartIcon from "../../components/CartIcon"

import { UserContext } from "../../contexts/UserProvider/Index"

import { signOutUser } from "../../utilities/firebase"

import CartDropDown from "../../components/CartDropDown"

import { CartContext } from "../../contexts/CartProvider"

import './index.scss'

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isOpen} = useContext(CartContext)

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser? <Link className='nav-link' to='/auth' onClick={signOutUser}>
                        SIGN OUT
                    </Link> : <Link className='nav-link' to='/auth'>
                        SIGN IN
                    </Link>
                    }
                    <CartIcon />
                </div>
                {
                    isOpen && <CartDropDown />
                }
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation