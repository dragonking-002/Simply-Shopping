import { useContext } from "react"
import { CartContext } from "../../contexts/CartProvider"

import { CheckoutItemContainer,ImageContainer,BaseSpan,Quantity,Arrow,Value,RemoveButton } from "./checkout-item.styles"

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