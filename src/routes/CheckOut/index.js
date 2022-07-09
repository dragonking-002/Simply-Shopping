import { CartContext } from "../../contexts/CartProvider"

import CheckOutItem from "../../components/CheckOutItem"
import { useContext } from "react"

import { CheckoutContainer,CheckoutHeader,HeaderBlock,Total } from "./check-out-styles"

const CheckOut = () => {
    const {cartItems,cartTotal} = useContext(CartContext)
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map( item => <CheckOutItem key={item.id} item={item} />)
            }
            <Total>TOTAL: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default CheckOut