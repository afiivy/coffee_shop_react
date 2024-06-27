import React, {useState, useEffect} from 'react';
import './App.css'
import Menu from './pages/Menu'
import Weather from './Weather';
import { 
  createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/Home'
import Locations from './pages/Locations'
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {path: "/", element:<Home/>},
      {path:"menu", element: <Menu/>},
      {path: "locations", element: <Locations/>},
      {path: "signin", element: <SignIn/>},
      {path:"about", element: <About/>},
      {path:"contact", element: <Contact/>},
    ]
  },
  
]);


function App() {
  const weatherApiKey = '68ad64e0c3f49eacec9056a0cab4a3e6';
  const [userCity, setUserCity] = useState(null)
  const [currentTemp, setCurrentTemp] = useState(null)

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('position', position)
          const { latitude, longitude } = position.coords;
          // //Anchorage 61.2181, -149.9003
          getWeatherData(61.2181, -149.9003)
          // // Death Valley 36.4614, -116.8656
          // getWeatherData(36.4614, -116.8656)

          console.log(latitude)
          console.log(longitude)
          // //browser
          // getWeatherData(latitude, longitude)
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


    let weatherAPIResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=
${lat}&lon=${lon}&appid=${weatherApiKey}&units=imperial`);
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
    <Weather currentTemp={currentTemp} userCity={userCity}/>
    <RouterProvider router={router} />
    <Footer/>
    
    
    </>
    
  )
}

export default App;