import { Profiler } from 'react';
import {createContext, useState} from 'react';
import { Cart } from '../components/Cart/Cart';

export const CartContext = createContext()

export const CartProvider = ({children}) => {

   
    const [carrito, setCarrito] = useState([])
    const [cartCount, setCartCount] = useState(0)

    const agregarCarrito = (item) => {

        const countAnterior = item.count
        console.log(countAnterior)

        if (carrito.some(product => product.id === item.id)){
          const copy = carrito
          const repeateditem = carrito.findIndex(product => product.id === item.id)
          console.log(copy[repeateditem].count)
          copy[repeateditem] = {
            ...copy[repeateditem],
            count: copy[repeateditem].count + countAnterior,
          }
          console.log(copy[repeateditem].count)

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

    return (
        <CartContext.Provider value={{carrito, cartCount, agregarCarrito, eliminarCarrito, vaciarCarrito}}>

            {children}

        </CartContext.Provider>
    )
}