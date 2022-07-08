import { useContext } from "react"
import { CartContext } from "../../contexts/CartProvider"

import './index.scss'

const CheckOutItem = ({item}) => {
    const {imageUrl,price,quantity,name} = item
    

    const {addItemToCart,removeItemFromCart,deleteItemFromCart} = useContext(CartContext)

    const increaseQuantity = () => {
        addItemToCart(item)
    }

    const decreaseQuantity = () => {
        removeItemFromCart(item)
    }

    const clearCartItem = () => {
        deleteItemFromCart(item)
    }

    return (
        <div className='checkout-item-container'>
          <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
          </div>
          <span className='name'> {name} </span>
          <span className='quantity'>
            <div className='arrow' onClick={decreaseQuantity}>
              &#10094;
            </div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={increaseQuantity}>
              &#10095;
            </div>
          </span>
          <span className='price'> {price}</span>
          <div className='remove-button' onClick={clearCartItem}>
            &#10005;
          </div>
        </div>
      );
}

export default CheckOutItem