import React from 'react'
import {Item} from './Item'

export const ItemList = (({productos = []}) =>{

    return (
        <section className="container">
            <h2>PRODUCTOS</h2>
            <hr/>
            <div className="row">
                {productos.map((prod)=>( <Item key={prod.id} item={prod}/>))}
            </div>
        </section>
    )

})                         