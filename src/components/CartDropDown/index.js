import Button from '../Button'

import CartItem from '../CartItem'

import { CartDropdownContainer,EmptyMessage,CartItems } from './cart-dropdown.styles'

import { useNavigate } from 'react-router-dom'

import {useSelector} from 'react-redux'

import {selectCartItems} from '../../redux-store/cart/cart-selector'

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems)

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