import React, {useState, useEffect}from "react";
import {useNavigate} from 'react-router-dom'
import './Nav.css'
import Cart from "./Cart";
import { GiCoffeePot } from "react-icons/gi";


export default function Navbar(){
    // const navigate = useNavigate();
    
    
    return(
        <>
        

        <Cart/>
    <h3 className="java" style={{paddingLeft:"50PX"}}>Java Coffee Shop<GiCoffeePot /></h3>
        <div className="nav"><div>

    <ul className="nav nav-pills">
        <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
            <a className="nav-link " href='/menu'>Menu</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href='/locations'>Cart</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href='/signin'>SignIn</a>
            {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
        </li>
    </ul>  


        
        </div>
        </div>



        </>
    )
}