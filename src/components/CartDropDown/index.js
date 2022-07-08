import './index.scss'

import Button from '../Button'

import CartItem from '../CartItem'

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
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map(item => <CartItem key={item.id} item={item} />)
                }
            </div>
            <Button onClick={goToCheckOut}>Go to Checkout</Button>
        </div>
    )
}

export default CartDropDown