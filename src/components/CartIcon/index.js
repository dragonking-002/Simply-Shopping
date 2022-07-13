import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import { CartIconContainer, ItemCount } from './cart-icon.styles'

import { useSelector } from 'react-redux'

import { selectCartIcon,selectCartCount } from '../../redux-store/cart/cart-selector'

import {useDispatch} from 'react-redux'

import { toggleCartIcon } from '../../redux-store/cart/cart-actions'


const CartIcon = () => {
    const dispatch = useDispatch()
    const isOpen = useSelector(selectCartIcon)
    const itemCount = useSelector(selectCartCount)
    
    const toggleCartDropdown = () => dispatch(toggleCartIcon(isOpen))

    return(
        <CartIconContainer onClick={toggleCartDropdown}>
            <ShoppingIcon  className='shopping-icon'/>
            <ItemCount>{itemCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon