import { createContext, useEffect, useState } from "react"


const addCartItem = (cartItems,productToAdd) => {
    const existingCartItem = cartItems.find(item => item.id===productToAdd.id)

    if(existingCartItem){
        return cartItems.map(item => item.id===productToAdd.id ? {...item, quantity: item.quantity+1}: item)
    }

    return [...cartItems,{...productToAdd,quantity:1}]
}

export const CartContext = createContext({
    isOpen: false,
    setCartState: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
    cartCount: 0
})

export const CartProvider = ({children}) => {
    const [isOpen,setCartState] = useState(false)
    const [cartItems,setCartItems] = useState([])
    const [cartCount,setCartCount] = useState(0)

    useEffect(() => {
        const newCount = cartItems.reduce((total,item) => total+item.quantity,0)
        setCartCount(newCount)
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const value={isOpen,setCartState,cartItems,addItemToCart,cartCount}

    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}