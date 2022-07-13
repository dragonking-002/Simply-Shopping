import CheckOutItem from "../../components/CheckOutItem"

import { CheckoutContainer,CheckoutHeader,HeaderBlock,Total } from "./check-out-styles"

import {useSelector} from 'react-redux'

import { selectCartItems,selectCartTotal } from "../../redux-store/cart/cart-selector"

const CheckOut = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)
    
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