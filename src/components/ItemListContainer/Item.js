import React from 'react'
import {Link} from 'react-router-dom'

export const Item = ({item}) => {

    return (
        <div className="card col-6 ">
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} />
            <p>{item.info}</p>
            <p>${item.precio}</p>
            <Link to={`/productos/${item.categoria}/${item.id}`} className="btn btn-outline-primary">Detalle del producto</Link>
        </div>
    )
}