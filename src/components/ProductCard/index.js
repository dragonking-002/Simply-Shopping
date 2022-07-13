import { ProductCartContainer,Footer,Name,Price } from './product-card.styles'

import {BUTTON_TYPE_CLASSES} from '../Button'

import Button from '../Button'

import {useSelector} from 'react-redux'

import { selectCartItems } from '../../redux-store/cart/cart-selector'

import { addItemToCart } from '../../redux-store/cart/cart-actions'

import {useDispatch} from 'react-redux'

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)

    const addItem = () => {
        dispatch(addItemToCart(cartItems,product))
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