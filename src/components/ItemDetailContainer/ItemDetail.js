import React, {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {Contador} from '../Contador/Contador'
import {CartContext} from '../../context/CartContext'

export const ItemDetail =({ id, nombre, info, img, category, precio, stock}) => {

    const {agregarCarrito} = useContext(CartContext)
    const [count, setCount] = useState(0);

    const agregarC = () =>{
        agregarCarrito({
            id, nombre, info, img, category, precio, stock, count
        })
    }

    return(
        <div className="my-5 mx-5">
            <h3> {nombre} </h3>
            <p>Precio: $ {precio}</p>
            <img src={img} alt={nombre}/>
            <p>{info}</p>

            <Contador max={stock} count={count} setCount={setCount} agregarCarrito={agregarC}/>
            
            <Link to={`/productos`} className="btn btn-primary m-1">Volver a Productos</Link>
        </div>
    )
}

