import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './index.scss'

import {useContext} from 'react'

import { CartContext } from '../../contexts/CartProvider'


const CartIcon = () => {
    const {isOpen,setCartState,cartCount} = useContext(CartContext)
    const toggleCartDropdown = () => setCartState(!isOpen)

    return(
        <div className='cart-icon-container' onClick={toggleCartDropdown}>
            <ShoppingIcon  className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon