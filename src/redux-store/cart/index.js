import { CART_ACTION_TYPES } from "./cart-action.types"

const INTIAL_STATE = {
    isOpen: false,
    cartItems: []
}

export const cartReducer = (state=INTIAL_STATE,action) => {
    const {type,payload} = action
    switch(type) {
        case CART_ACTION_TYPES.TOGGLE_CART_ICON:
            return {
                ...state,
                isOpen: !payload
            }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        default :
            return state
    } 
}