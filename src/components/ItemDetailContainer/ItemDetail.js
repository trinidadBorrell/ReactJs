import React from 'react'
import {Link} from 'react-router-dom'
import {Contador} from '../Contador/Contador'

export const ItemDetail =({ id, nombre, info, img, precio}) => {

    return(
        <div className="my-5 mx-5">
            <h3> {nombre} </h3>
            <p>Precio: $ {precio}</p>
            <img src={img} alt={nombre}/>
            <p>{info}</p>

            <Contador/>
            <Link to={`/productos`} className="btn btn-primary">Atrás</Link>
        </div>
    )
}

