import React from 'react'
import { CartWidget } from './CartWidget'
import {Link} from 'react-router-dom'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBar = () => {

    return(
        <header className="encabezado">
            <h1 className="text-center">MODA SUSTENTABLE</h1>

            <h2 className="text-center">Bienvenidxs a nuestra página Web</h2>
        <hr/>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand"><CartWidget/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link" to={'/inicio'}>Inicio</Link></li>
                            <li className="nav-item"><Link className="nav-link" to={'/nosotrxs'}>Sobre Nosotrxs</Link></li>
                        
                            <div className="dropdown">
                                <button className="dropbtn"><Link className="dropLink" to={'/productos'}>Productos</Link></button>
                                <div className="dropdown-content">
                                    <Link to={'/productos/remeras'}>Remeras</Link>
                                    <Link to={'/productos/pantalones'}>Pantalones</Link>
                                    <Link to={'/productos/accesorios'}>Accesorios</Link>
                                </div>
                            </div>
                        </ul>
                    </div>
                </nav>
            
            </div>
        </header>
    )
}

