import React from 'react'
import {Link} from 'react-router-dom'
import {Contador} from '../Contador/Contador'

export const ItemDetail =(id, nombre, precio, info, img, categoria) => {

    return(
        <div>
            <h2>{nombre}</h2>
            <p>Precio: $ {precio}</p>
            <img src={img} alt={nombre}/>
            <p>{info}</p>

            <Contador/>
            <Link to={`/productos`} className="btn btn-primary">Atrás</Link>
        </div>
    )
}

