import React, {useState, useEffect} from 'react';
import './App.css';
import MenuItem from './components/MenuItem'
import { fakeMenuItems, fakeMerchItems, fakePastriesItems } from './menuData';
import Weather from './components/Weather';
import Navbar from './components/Navbar';
import Popup from './components/Popup';


function App() {
  const weatherApiKey = '68ad64e0c3f49eacec9056a0cab4a3e6';
  const [ menuItems, setMenuItems] = useState(fakeMenuItems)
  const [merchItems, setMerchItems] = useState(fakeMerchItems)
  const [pastriesItems, setPastriesItems] = useState(fakePastriesItems)
  const [userCity, setUserCity] = useState(null)
  const [currentTemp, setCurrentTemp] = useState(null)


  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('position', position)
          const { latitude, longitude } = position.coords;
          // //Anchorage 61.2181, -149.9003
          // getWeatherData(61.2181, -149.9003)
          // // Death Valley 36.4614, -116.8656
          // getWeatherData(36.4614, -116.8656)
          // //browser
          getWeatherData(latitude, longitude)
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, [])

  async function getWeatherData(lat, lon){
    console.log(lat)
    console.log(lon)
    let weatherAPIResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`);
    console.log('weatherAPIResponse', weatherAPIResponse)
    if(weatherAPIResponse.status != 200){
      alert('could not get weather data')
    }
    let jsonData = await weatherAPIResponse.json()
    console.log('jsonData', jsonData)
    setUserCity(jsonData.name)
    setCurrentTemp(Math.round(jsonData.main.temp))
  }


  return (
<>

    
    <div className='container'>
      
      <Navbar/>
      <Popup/>
    <div className="row">
      <div className="col-12">
          <h1 className={"my-3 text-cnet" }>Java Coffee Shop</h1>
        </div>
      </div>

      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://github.com/afiivy/images/blob/main/coffeelogo.jpg?raw=true" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



<Weather currentTemp={currentTemp} userCity={userCity}/>
      <div className="row my-5">
        <div className="h3">Coffee</div>
        {menuItems && menuItems.length > 0 && menuItems.map((menuItem) => (
            <MenuItem key={menuItem.id} item={menuItem.item} 
            price={menuItem.price} image={menuItem.image} altText={menuItem.item} />
        ))}
      </div>
      

      <div className="row my-5">
        <div className="h3">Pastries</div>
        {pastriesItems && pastriesItems.length > 0 && pastriesItems.map((pastriesItem) => (
            <MenuItem key={pastriesItems.id} item={pastriesItems.item} 
            price={pastriesItem.price} image={pastriesItem.image} altText={pastriesItem.item} />
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

export default App;
