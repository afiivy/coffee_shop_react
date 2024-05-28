import React, {useState, useEffect} from 'react';
import './App.css';
import MenuItem from './Components/MenuItem'
import { fakeMenuItems, fakeMerchItems } from './fakeData';
import Navbar from './Components/Navbar';
import Popup from './Components/Popup';




function App() {
  const [ menuItems, setMenuItems] = useState(fakeMenuItems)
  const [merchItems, setMerchItems] = useState(fakeMerchItems)

  return (
<>

    
    <div className='container'>
      
      <Navbar/>
      <Popup/>
    <div className="row">
      <div className="col-12">
          <h1 className={"my-3 text-cnet"}>Java Coffee Shop</h1>
        </div>
      </div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




      <div className="row my-5">
        <div className="h3">Coffee</div>
        {menuItems && menuItems.length > 0 && menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem.item} 
            price={menuItem.price} image={menuItem.image} altText={menuItem.item} />
        ))}
      </div>

      <div className="row">
        <div className="h3">Merchandise</div>
        {merchItems && merchItems.length > 0 && merchItems.map((merchItem) => (
          <MenuItem key={merchItem.id} item={merchItem.item} price={merchItem.price} image={merchItem.image} altText={merchItem.item} />
        ))}
      </div>
    </div>
    </>
    );
  }

export default App;
