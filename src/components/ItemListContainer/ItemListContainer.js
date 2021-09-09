import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import {pedirDatos} from "../../helpers/pedirDatos"
import { ItemList } from './ItemList'
import { getFirestore } from '../../firebase/config'

export const ItemListContainer = () => {

    const {categoria} = useParams()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)

        const db = getFirestore()
        const productos = db.collection('productos')

        if (categoria) {
            const filtrado = productos.where('category', '==', categoria)
            filtrado.get()
                .then((response) => {
                    const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                    setData(data)
            })
                .finally(()=>{
                    setLoading(false)
            })
        } else {
        productos.get()
            .then((response) => {
                const data = response.docs.map((doc) => ({...doc.data(), id: doc.id}))
                
                setData(data)
            })
            .finally(()=>{
                setLoading(false)
            })
        }
        /*
        setLoading(true)

        pedirDatos()
            .then(res =>{

                if (categoria){
                    const arrayFiltrado = res.filter(prod => prod.categoria === categoria)
                    setData(arrayFiltrado)
                }
                else {
                    setData(res)
                }
            } )
            .catch(err => console.log(err))
            .finally(()=>{
                setLoading(false)
            })*/
    }, [categoria])

    return (
        <>
        {loading 
        ? <h2>Cargando...</h2>
        : <ItemList productos={data}/>}
        </>
    )

}