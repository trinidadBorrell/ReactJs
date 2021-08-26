import React, {useEffect, useState} from 'react'

export const Contador = () =>{

    const [count, setCount] = useState(0);

    const incrementar = () => setCount(count + 1); 
    const restar = () => {
        if (count ==0){
            setCount(0);
        }
        else{
            setCount(count -1 );
        } }; 


    return(
        <div>
            <button onClick={incrementar} className="m-1">Añadir Unidad</button>
            <button onClick={restar}>Restar Unidad</button>
            <p>Cantidad de Elementos: {count}</p>
        </div>
    )
}