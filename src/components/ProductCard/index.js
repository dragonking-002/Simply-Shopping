import { ProductCartContainer,Footer,Name,Price } from './product-card.styles'

import {BUTTON_TYPE_CLASSES} from '../Button'

import Button from '../Button'

import { CartContext } from '../../contexts/CartProvider'
import { useContext } from 'react'

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product
    let {addItemToCart} = useContext(CartContext)

    const addItem = () => {
        addItemToCart(product)
    }

    return(
        <ProductCartContainer>
            <img src={imageUrl} alt={name}/>
            <Footer>
                <Name>{name}</Name>
                <Price>${price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addItem}>Add to Cart</Button>
        </ProductCartContainer>
    )
}

export default ProductCard