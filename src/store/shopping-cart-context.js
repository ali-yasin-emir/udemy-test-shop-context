import { DUMMY_PRODUCTS } from "@/dummy-products";
import { createContext, useState, useRef, useImperativeHandle } from "react";

export const CartContext = createContext({
  items: [],
  products: [],
  addToCart: () => {},
  handleQuantity: () => {}
});

// All logical operations like useStates, handleFunctions and ctxValue will be in this function, so we don't need to stick all functionality related with components in app page, or main page.
export const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState({
    items: []
  })

  const handleAddToCart = (id) =>{
    setCart((prevCart) => {
      
      const updatedCart = [...prevCart.items]

      const cartItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === id)

      const existingCartItem = updatedCart[cartItemIndex]

      if(existingCartItem){
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1
        }

        updatedCart[cartItemIndex] = updatedCartItem
      } else{
        const cartItem = DUMMY_PRODUCTS.find((item) => item.id === id)

        updatedCart.push({
          id: cartItem.id,
          price: cartItem.price,
          name: cartItem.title,
          quantity: 1
        })

      }
      console.log(updatedCart)

      return {
        items: updatedCart
      }
    })
  }

 const handleQuantity = (id, amount) => {

  setCart((prevCart) => {
      
    const updatedCart = [...prevCart.items]

    const cartItemIndex = updatedCart.findIndex((cartItem) => cartItem.id === id)
    
    const existingCartItem = updatedCart[cartItemIndex]
    
    const updatedItem = {
      ...existingCartItem, 
      quantity: existingCartItem.quantity + amount
    }

    // updatedItem.quantity += amount
  
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(cartItemIndex, 1);
    } else {
      updatedCart[cartItemIndex] = updatedItem;
    }

    return {
      items: updatedCart
    }
  })
}

const ctxValue = {
  items: cart.items,
  products: DUMMY_PRODUCTS,
  addToCart: handleAddToCart,
  handleQuantity: handleQuantity
}

  return <CartContext.Provider value={ctxValue}  className="flex-col">
    {children}
  </CartContext.Provider>

}

export default CartContextProvider;