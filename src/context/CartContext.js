import {createContext, useState} from 'react';

export const CartContext = createContext()

export const CartProvider = ({children}) => {

   
    const [carrito, setCarrito] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const agregarCarrito = (item) => {

        const countAnterior = item.count

        if (carrito.some(product => product.id === item.id)){
          const copy = carrito
          const repeateditem = carrito.findIndex(product => product.id === item.id)

          copy[repeateditem] = {
            ...copy[repeateditem],
            count: copy[repeateditem].count + countAnterior,
          }


          setCarrito(copy)
          setCartCount(copy[repeateditem].count)
        }
        else{
          setCarrito([...carrito, item]);
          setCartCount(prev => prev + item.count)
        }

      }
  
    
    const eliminarCarrito = (id, count) => {
      setCarrito( carrito.filter(prod => prod.id !== id))
      setCartCount(prev => prev - count)
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
      setCartCount(0)
    }

    const totalCarrito = () => {
      return carrito.reduce((acc, prod) => acc + prod.precio * prod.count, 0)


    }

    return (
        <CartContext.Provider value={{carrito, totalCarrito, cartCount, agregarCarrito, eliminarCarrito, vaciarCarrito}}>

            {children}

        </CartContext.Provider>
    )
}