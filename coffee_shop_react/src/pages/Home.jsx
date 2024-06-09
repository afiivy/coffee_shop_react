import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {Cart} from '../components/Cart';
// import Menu from './pages/Menu'

const Home = () => {
    const navigate = useNavigate()
    const [menuItems, setMenuItems] = useState()
    const Cart = () => {
        const{ cart, removeItem, updateCart} = Cart;

    return (   
    <> 
    
    {/* <nav class="navbar bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand "  href="http://localhost:3000/" >
            <img src= "" alt="" width="30" height="24"></img>
            </a>
        </div>
    </nav> 

    <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
</>
    )}
}
export default Home