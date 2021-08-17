import React from 'react'
import { CartWidget } from './CartWidget'
import 'bootstrap/dist/css/bootstrap.min.css';



export const NavBar = () => {

    return(
        <header className="encabezado">
            <h1 className="text-center">MODA SUSTENTABLE</h1>

            <h2 className="text-center">Bienvenidxs a nuestra página Web</h2>
        <hr/>
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><CartWidget/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a href="#" className="nav-link">Inicio</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Sobre Nosotrxs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Productos</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Contacto</a></li>
                    </ul>
                 </div>
            </nav>
            
        </div>
        </header>
    )
}