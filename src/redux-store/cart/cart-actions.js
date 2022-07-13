import { createAction } from "../../utilities/reducer"

import { CART_ACTION_TYPES } from "./cart-action.types"

export const toggleCartIcon = (bool) => createAction(CART_ACTION_TYPES.TOGGLE_CART_ICON,bool)

const addCartItem = (cartItems,productToAdd) => {
    const existingCartItem = cartItems.find(item => item.id===productToAdd.id)

    if(existingCartItem){
        return cartItems.map(item => item.id===productToAdd.id ? {...item, quantity: item.quantity+1}: item)
    }

    return [...cartItems,{...productToAdd,quantity:1}]
}

const removeCartItem = (cartItems,productToRemove) => {

    const existingCartItem = cartItems.find(item => item.id===productToRemove.id)
    if(existingCartItem.quantity===1)
    return cartItems.filter(item => item.id !== productToRemove.id);

    return cartItems.map(item => item.id===productToRemove.id ? {...item, quantity: item.quantity-1}: item)
}

const deleteCartItem = (cartItems,productToDelete) => {
    return cartItems.filter(item => item.id!==productToDelete.id)
}


const updateCartItemReducer = (newCartItems) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{cartItems: newCartItems})
}

export const addItemToCart = (cartItems,productToAdd) => updateCartItemReducer(addCartItem(cartItems,productToAdd))


export const removeItemFromCart = (cartItems,productToRemove) => updateCartItemReducer(removeCartItem(cartItems,productToRemove))


export const deleteItemFromCart = (cartItems,productToDelete) => updateCartItemReducer(deleteCartItem(cartItems,productToDelete))

