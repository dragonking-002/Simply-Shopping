import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import { CartIconContainer, ItemCount } from './cart-icon.styles'

import {useContext} from 'react'

import { CartContext } from '../../contexts/CartProvider'


const CartIcon = () => {
    const {isOpen,setCartState,cartCount} = useContext(CartContext)
    const toggleCartDropdown = () => setCartState(!isOpen)

    return(
        <CartIconContainer onClick={toggleCartDropdown}>
            <ShoppingIcon  className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon