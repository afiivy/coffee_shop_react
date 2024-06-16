import React, {useState, useEffect} from 'react';
import MenuItem from '../components/MenuItem'
import { fakeMenuItems, fakeMerchItems, fakePastriesItems,shoppingCartItem } from '../menuData';
// import Weather from '../components/Weather';
import Navbar from '../components/Navbar';
import Popup from '../components/Popup';
import { GiCoffeeCup } from "react-icons/gi";
import Cart from '../components/Cart';


export default function Home() {
  const [menuItems, setMenuItems] = useState(fakeMenuItems)
  const [merchItems, setMerchItems] = useState(fakeMerchItems)
  const [pastriesItems, setPastriesItems] = useState(fakePastriesItems)
  const [shoppingCart, setShoppingCart] = useState([])

  useEffect(() => {
    console.log('shopping cart in useeffect', shoppingCart)
  }, [shoppingCart])

  function updateCart(id){
    console.log( "id",id)
    const itemObject = menuItems.find(item => item.id===id)
    console.log("itemobject", itemObject)
    setShoppingCart([...shoppingCart,itemObject])

  }

  return (
<>  
    <div className='container'>
      <div className="row">Cart 
       {/* <div className="col-10"></div>  */}
        <div className="col-10">
          <Cart cartItems={shoppingCart}/>
        </div>
      </div>
      

      <div className="row my-5">
      <div className="h3">Coffee</div>
        {/* <div className="col-10"> */}
        {menuItems && menuItems.length > 0 && menuItems.map
        ((menuItem)=> (
            <MenuItem key={menuItem.id} item={menuItem.item} 
            price={menuItem.price} id={menuItem.id} image={menuItem.image} altText={menuItem.item} updateCart={updateCart} />
        ))}
        {/* </div>
        <div className="col-2"></div>         */}
      </div>
      

      <div className="row my-5">
        <div className="h3">Pastries</div>
        {pastriesItems && pastriesItems.length > 0 && pastriesItems.map((pastriesItem) => (
            <MenuItem key={pastriesItem.id} item={pastriesItem.item} price={pastriesItem.price} image={pastriesItem.image} altText={pastriesItem.item} />
        ))}
      </div>

      <div className="row">
        <div className="h3">Merchandise</div>
        {merchItems && merchItems.length > 0 && merchItems.map((merchItem) => (
          <MenuItem key={merchItem.id} item={merchItem.item} price={merchItem.price} 
          image={merchItem.image} altText={merchItem.item} />
        ))}


      </div>
    </div>
    </>
    );
  }

