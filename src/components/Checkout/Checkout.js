import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { generarOrden } from '../../firebase/generarOrden'
import { Redirect } from 'react-router'
import Swal from 'sweetalert2'


export const Checkout =()=>{

    const{carrito, totalCarrito, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre:'',
        email: '',
        tel: 0,
    })

   
    const handleInputChange = (e) => {
       setValues({
           ...values,
           [e.target.name]: e.target.value
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    if (values.nombre.length > 3 && values.email.length > 3 && values.tel.length > 5) {
        generarOrden(values, carrito, totalCarrito())
            .then( res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Su compra fue registrada! ',
                    text: `En breve nos comunicaremos con vos`,
                    confirmButtonText: 'Ok!'
                })

                vaciarCarrito()
            })
            .catch( err => {
                console.log(err)
            })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Ops!',
            text: 'Hubo un error'
          })}}

        
    return(
        <div>
            <h2>Checkout</h2>
            <hr/>

            {!carrito.length 
                ? <Redirect to="/"/>
                :
        
                <div>
                    <form className="form-group" onSubmit={handleSubmit}>
                        <label>Nombre: </label>
                        <input 
                            className="form-control"
                            type="text"
                            value={values.nombre}
                            onChange={handleInputChange}
                            name="nombre"
                            required
                        />
                        <br/>
                        <label>Teléfono: </label>
                        <input
                            className="form-control"
                            type="tel"
                            value={values.tel}
                            onChange={handleInputChange}
                            name="tel"
                            required
                        />
                        <br/>
                        <label>Email: </label>
                        <input
                            className="form-control"
                            type="email"
                            value={values.email}
                            onChange={handleInputChange}
                            name="email"
                            required
                         />
                        <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        }
        </div>
    )
}