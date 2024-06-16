import React from 'react'
import { FaOpencart } from "react-icons/fa";

export default function MenuItem({id, updateCart, image, altText, price, item}) {
    function addtoCart(){
            updateCart(id)
    }

    return (   
        <div className="card" style={{width: "16rem", backgroundColor: "black", color: "white"}}>
            <img src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{item}</h5>
                        <p className="card-text">{`$${price}`}</p>
                        <button onClick={addtoCart} type="button" class="btn btn-outline-primary"><FaOpencart /> Add to cart</button>        
                </div>        
    </div>
    )
}
