import React, {useEffect, useState} from 'react'

export const Contador = ({max, count, setCount, agregarCarrito}) =>{


    const incrementar = () => {
        if (count < max){
            setCount(count + 1);
        }
    }
    
    const restar = () => {
        if (count > 0){
            setCount(count -1 );
        } 
    }; 


    return(
        <div>
            <button onClick={incrementar} className=" btn btn-primary m-1">+</button>
            <p>Cantidad de Elementos: {count}</p>
            <button onClick={restar} className="btn btn-primary">-</button>
            <br/>
            <br/>
            <button className="btn btn-primary m-1" onClick={agregarCarrito} >Agregar al Carrito</button>
        </div>
    )
}