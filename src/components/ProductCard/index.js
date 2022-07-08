import './index.scss'

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
        <div className="product-card-container">
            <img src={imageUrl} alt={name}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <Button buttonType="inverted" onClick={addItem}>Add to Cart</Button>
        </div>
    )
}

export default ProductCard