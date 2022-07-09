import Button from '../Button'

import CartItem from '../CartItem'

import { CartDropdownContainer,EmptyMessage,CartItems } from './cart-dropdown.styles'

import { CartContext } from '../../contexts/CartProvider'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext)

    const navigate = useNavigate()

    const goToCheckOut = () => {
        navigate('/checkout')
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?
                    cartItems.map(item => <CartItem key={item.id} item={item} />) :
                    <EmptyMessage>Your Cart is Empty</EmptyMessage>
                }
            </CartItems>
            <Button onClick={goToCheckOut}>Go to Checkout</Button>
        </CartDropdownContainer>
    )
}

export default CartDropDown