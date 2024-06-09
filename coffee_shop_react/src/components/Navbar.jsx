import React from "react";
import {useNavigate} from 'react-router-dom'
import './Nav.css'
import Cart from "./Cart";

export default function Navbar(){
    const navigate = useNavigate();
    


    
    return(
        <> 

        <div className="nav">
        <h3>Java Coffee Shop</h3>
        <div>
            <button onClick={() => navigate('/')}>Home</button> 
            <button onClick={() => navigate('/menu')}>Menu</button> 
            <button onClick={() => navigate('/locations')}>Locations</button>
            {/* <Cart/> */}
            

        </div>
        </div>


        </>
    )
}