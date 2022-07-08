import { createContext, useEffect, useState } from "react"


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
    setCartState: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    cartCount: 0,
    removeItemFromCart: ()=>{},
    deleteItemFromCart: ()=>{},
    cartTotal: 0
})

export const CartProvider = ({children}) => {
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

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems,productToRemove))
    }

    const deleteItemFromCart = (productToDelete) => {
        setCartItems(deleteCartItem(cartItems,productToDelete))
    }

    const value={isOpen,setCartState,cartItems,addItemToCart,cartCount,removeItemFromCart,deleteItemFromCart,cartTotal}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}