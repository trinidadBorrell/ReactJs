import React, { useContext } from 'react'
import { IoCartOutline } from "react-icons/io5";
import {CartContext} from '../../context/CartContext'
import'../NavBar/NavBar.css'
import {Link} from 'react-router-dom'

export const CartWidget = () => {
    const {cartCount} = useContext(CartContext) 
    return(
            <Link to="/cart">
                <div>   
                    <IoCartOutline className="cartWidget"/>
                    <span>{cartCount}</span>
                </div> 
            </Link>
      
    )
}