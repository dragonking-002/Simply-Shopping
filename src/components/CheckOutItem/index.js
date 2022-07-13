import { CheckoutItemContainer,ImageContainer,BaseSpan,Quantity,Arrow,Value,RemoveButton } from "./checkout-item.styles"

import {useDispatch,useSelector} from 'react-redux'

import { addItemToCart,removeItemFromCart,deleteItemFromCart } from "../../redux-store/cart/cart-actions"

import { selectCartItems } from "../../redux-store/cart/cart-selector"


const CheckOutItem = ({item}) => {
    const {imageUrl,price,quantity,name} = item
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const increaseQuantity = () => {
      dispatch(addItemToCart(cartItems,item))
    }

    const decreaseQuantity = () => {
      dispatch(removeItemFromCart(cartItems,item))
    }

    const clearCartItem = () => {
      dispatch(deleteItemFromCart(cartItems,item))
    }

    return (
        <CheckoutItemContainer>
          <ImageContainer>
            <img src={imageUrl} alt={`${name}`} />
          </ImageContainer>
          <BaseSpan> {name} </BaseSpan>
          <Quantity>
            <Arrow onClick={decreaseQuantity}>
              &#10094;
            </Arrow>
            <Value>{quantity}</Value>
            <Arrow onClick={increaseQuantity}>
              &#10095;
            </Arrow>
          </Quantity>
          <BaseSpan> {price}</BaseSpan>
          <RemoveButton onClick={clearCartItem}>
            &#10005;
          </RemoveButton>
        </CheckoutItemContainer>
      );
}

export default CheckOutItem