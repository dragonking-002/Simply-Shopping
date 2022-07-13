import { createContext, useReducer } from "react"

import { createAction } from "../../utilities/reducer"

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


export const CartContext = createContext({
    isOpen: false,
    setCartIconState: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    cartCount: 0,
    removeItemFromCart: ()=>{},
    deleteItemFromCart: ()=>{},
    cartTotal: 0
})

const INTIAL_STATE = {
    isOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}


const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_CART_ICON_STATE: 'SET_CART_ICON_STATE'
}

const cartReducer = (state,action) => {
    const {type,payload} = action
    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ICON_STATE:
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
            throw new Error (`unhandled type of ${type} in cartReducer`)
    } 
}


export const CartProvider = ({children}) => {
   /* 
    const [isOpen,setCartState] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [cartCount,setCartCount] = useState(0)
    const [cartTotal,setCartTotal] = useState(0)

    useEffect(() => {
        const newCount = cartItems.reduce((total,item) => total+item.quantity,0)
        const newTotal = cartItems.reduce((total,item) => total+item.quantity*item.price,0)
        setCartCount(newCount)
        setCartTotal(newTotal)
    },[cartItems])
    
    */

    const [{isOpen,cartItems,cartCount,cartTotal},dispatch] = useReducer(cartReducer,INTIAL_STATE)


    const updateCartItemReducer = (newCartItems) => {
        const newCount = newCartItems.reduce((total,item) => total+item.quantity,0)
        const newTotal = newCartItems.reduce((total,item) => total+item.quantity*item.price,0)
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS,{cartItems: newCartItems,cartCount: newCount,cartTotal: newTotal}))
    }



    const addItemToCart = (productToAdd) => {
        updateCartItemReducer(addCartItem(cartItems,productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        updateCartItemReducer(removeCartItem(cartItems,productToRemove))
    }

    const deleteItemFromCart = (productToDelete) => {
        updateCartItemReducer(deleteCartItem(cartItems,productToDelete))
    }

    const setCartIconState = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ICON_STATE,bool))
    }

    const value={isOpen,setCartIconState,cartItems,addItemToCart,cartCount,removeItemFromCart,deleteItemFromCart,cartTotal}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}