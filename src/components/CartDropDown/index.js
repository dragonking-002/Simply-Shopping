import './index.scss'

import Button from '../Button'

import CartItem from '../CartItem'

import { CartContext } from '../../contexts/CartProvider'
import { useContext } from 'react'

const CartDropDown = () => {
    const {cartItems} = useContext(CartContext)
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {
                    cartItems.map(item => <CartItem key={item.id} item={item} />)
                }
            </div>
            <Button>Go to Checkout</Button>
        </div>
    )
}

export default CartDropDown