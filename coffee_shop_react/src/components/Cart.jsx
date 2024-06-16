import React, {useState, useEffect}from 'react'
import MenuItem from './MenuItem'
import { fakeMenuItems, fakeMerchItems, fakePastriesItems, shoppingCartItem } from '../menuData';




export default function Cart({cartItems}) {
    
return (
    <> 
    
    <div className='cartItem' size>
        {cartItems && cartItems.length > 0 && cartItems.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem.item} 
            price={menuItem.price} image={menuItem.image}altText={menuItem.item} />
        ))} 
    </div>

    </>
    
    )
}
