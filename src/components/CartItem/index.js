import { CartItemContainer,ItemDetails } from "./cart-item.styles"

const CartItem = ({item}) => {
    const {imageUrl,quantity,price,name} = item
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={name}/>
            <ItemDetails>
                <span className="name">{name}</span>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem