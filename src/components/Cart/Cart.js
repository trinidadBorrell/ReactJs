import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const Cart = () => {

    const {carrito, eliminarCarrito, vaciarCarrito} = useContext(CartContext)
    return (
        <div>
            <h2>RESUMEN DE COMPRA</h2>

            {carrito.map(prod => (
                <div key={prod.id}>
                    <h3>{prod.nombre}</h3>
                    <p>Cantidad: {prod.count}</p>
                    <p>Precio: ${prod.precio * prod.count}</p>
                    <button className="btn btn-danger" onClick={()=> eliminarCarrito(prod.id, prod.count)}>ELIMINAR ELEMENTO</button>
                </div>
            ))}

            <hr/> 
            <button className="btn btn-danger" onClick={vaciarCarrito}>VACIAR CARRITO</button>
            <Link to="/checkout">
                <button className="btn btn-success nx-3">
                    Terminar mi compra
                </button>
            </Link>

        </div>
    )
}