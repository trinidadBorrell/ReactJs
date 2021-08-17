import React from 'react'

export const Item = ({item}) => {

    return (
        <div className="card col-4">
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre} />
            <p>{item.info}</p>
            <p>${item.precio}</p>
        </div>
    )


}