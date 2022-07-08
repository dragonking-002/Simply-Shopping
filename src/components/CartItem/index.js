import './index.scss'

const CartItem = ({item}) => {
    const {imageUrl,quantity,price,name} = item
    return (
        <div className="cart-item-container">
            <img src={imageUrl} alt={name}/>
            <div className="item-details">
                <span className="name">{name}</span>
                <span>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem