import { Profiler } from 'react';
import {createContext, useState} from 'react';
import { Cart } from '../components/Cart/Cart';

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const agregarCarrito = (item) => {

        if (carrito.some(product => product.id === item.id)){
          const copy = carrito
          const repeateditem = carrito.findIndex(product => product.id === item.id)
          copy[repeateditem] = {
            ...copy[repeateditem],
            count: copy[repeateditem].count + cartCount
          }
          setCarrito(copy)
          setCartCount(copy[repeateditem].count)
        }
        else{
          setCarrito([...carrito, {...item}]);
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

    return (
        <CartContext.Provider value={{carrito, cartCount, agregarCarrito, eliminarCarrito, vaciarCarrito}}>

            {children}

        </CartContext.Provider>
    )
}