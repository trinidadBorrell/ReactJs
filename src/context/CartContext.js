import { Profiler } from 'react';
import {createContext, useState} from 'react';
import { Cart } from '../components/Cart/Cart';

export const CartContext = createContext()


/**
 * 
 *{carrito.forEach(element => {
            if (carrito[element].id !== prod.id) || (carrito == "") {
                setCarrito([
                    ...carrito,
                    prod
                  ])
            }
            else if(carrito[element].id === prod.id){
                carrito.filter(prod => prod.id !== carrito[element].id)
                setCarrito([
                    ...carrito,
                    prod
                  ])
            }}  
 */
export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (prod) => {

      if (carrito == ''){
        setCarrito([
          ...carrito,
          prod
        ]);
      }
      else {
        carrito.forEach(element => {
          if (element.id !== prod.id) {
              setCarrito([
                  ...carrito,
                  prod
                ]);
          }
          else if(element.id === prod.id){
              /*setCarrito([
                  ...carrito,
                  element.count += prod.count
                ]);
              }}*/
            }})}}
  

        
    const eliminarCarrito = (id) => {
      setCarrito( carrito.filter(prod => prod.id !== id))
    }
    
    const cantidadCarrito = () => {
      return carrito.reduce((acc, prod) => acc + prod.count, 0)
    }
  
    const vaciarCarrito = () => {
      setCarrito([])
    }

    return (
        <CartContext.Provider value={{carrito, agregarCarrito, eliminarCarrito, cantidadCarrito, vaciarCarrito}}>

            {children}

        </CartContext.Provider>
    )
}