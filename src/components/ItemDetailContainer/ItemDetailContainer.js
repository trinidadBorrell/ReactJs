import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from './ItemDetail'
import { getFirestore } from '../../firebase/config'

export const ItemDetailContainer = () => {

    const {itemId} = useParams()
    
    const [loading, setLoading] = useState(false)
    const [item, setItem]= useState(null)

    useEffect(()=> {
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)

        item.get()
            .then((doc) => {
            setItem({...doc.data(), id: doc.id})
            })
            .finally(()=> {setLoading(false)})
    }, [itemId])

    return (
        <div>
            {loading 
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
    )

}