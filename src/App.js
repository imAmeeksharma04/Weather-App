import axios from "axios"
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import img from './images/wicon.png'
import humidity from './images/humidity.png'
import wind from './images/wind.png'
import Footer from "./components/footer";


function App() {

  const apikey = process.env.REACT_APP_WEATHER_API;
  
  const [PlaceName , setPlaceName] = useState("")
  const [data, setdata] = useState({}) 

  const getWetherDetails = (CityName) => {
    if (!CityName) return
    const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=" + CityName + "&appid=" + apikey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)

            setdata(res.data)

    }).catch((err) => {
      console.log("err", err)
    })
  }

  const HandlePlaceInput = (e) =>{
    setPlaceName(e.target.value)
  }

  const Searchplace = ()=>{
            getWetherDetails(PlaceName)
  }


  useEffect(() => {

    getWetherDetails("Rajasthan")
  }, [])


  return (

    <>
      <body  >
        {/* <div class="col-sm-9  p-3  bg-transparent mt-3 ">
          <IntroTxt/>
        </div> */}
        <div className="col-md-12">
          <div className="Weather-main">
            <h1 className="Heading">Weather App</h1>
            <div class="col-sm-3 mt-3  ">
              <input type="text" class="form-control bg-transparent border-black" onChange={HandlePlaceInput} value={PlaceName} placeholder="Place" aria-label="Place" required></input>
            </div>
            <button type="button" class="btn btn-outline-dark mt-3  " onClick={Searchplace}>Submit</button>
          </div>
          <div className="col-md-12 text-center mt-5">
            <div className="shadow-lg p-3 mb-5 bg-transparent rounded border border-3 weatherResultBox">
              <img className="weatherIcon" src={img} alt="wicon" />
              <h6 className="WeatherCity">{data?.name}</h6>
              <h5 className="WeatherTemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h5>
              <div className="col">
                <div className="details">
                  <img className="humidity" src={humidity} alt="humidity"></img>
                <div>
                  <p className="Humidperc">50%</p>
                  <p>Humidity</p>
                  </div>
                </div>
                <div className="details">
                  <img className="wind" src={wind} alt="wind"></img>
                <div>
                  <p className="windspeed">50Km/h</p>
                  <p>wind speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </body>
    </>
  );
}

export default App;
