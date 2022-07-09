import { CartContext } from "../../contexts/CartProvider"

import CheckOutItem from "../../components/CheckOutItem"
import { useContext } from "react"

import './index.scss'

const CheckOut = () => {
    const {cartItems,cartTotal} = useContext(CartContext)
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map( item => <CheckOutItem key={item.id} item={item} />)
            }
            <div className='total'>TOTAL: ${cartTotal}</div>
        </div>
    )
}

export default CheckOut