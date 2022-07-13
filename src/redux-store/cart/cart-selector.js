import {createSelector} from 'reselect'

const selectCartReducer = (state) => state.cart

export const selectCartIcon = createSelector(
    [selectCartReducer],
    (cart) => cart.isOpen
)


export const selectCartCount = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce((total,item) => total+item.quantity,0)
)

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
)

export const selectCartTotal = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems.reduce((total,item) => total+item.quantity*item.price,0)
)

