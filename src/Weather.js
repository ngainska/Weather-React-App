import React, {useState} from "react";
import axios from "axios";
//import Forecast from "./Forecast";


export default function Weather(props) {
  
let [city, setCity]=useState("");
let [weatherUpdate, setWeatherUpdate]= useState(false);
let [weather,setWeather] = useState({});

function showWeather(response){
  setWeatherUpdate(true);
  setWeather({
    //coordinateslat: (response.data.coord.lat),
     //coordinateslon: (response.data.coord.lon),
    temperature: (Math.round(response.data.main.temp)),
     humidity:(response.data.main.humidity),
     wind:(Math.round(response.data.wind.speed)),
     description: (response.data.weather[0].description),
maxCelsius:(Math.round(response.data.main.temp_max)),
minCelsius:(Math.round(response.data.main.temp_min)),
mainCity:(response.data.name),
//date = (formatDate(response.data.dt * 1000)),
icon:(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`),
  });
}

function handleSubmit(event){

    event.preventDefault();
    let apiKey="b6a67f67579bcd300971f2f49b91d214";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
}

function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherUpdate===true) {return(
 <div>
        <form onSubmit={handleSubmit} id="search-form" className="mb-3" >
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type city name here"
            className="form-control"
            id="city-input"
            autoComplete="off"
            autoFocus="on"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <div className="btn-group" role="group">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
            <button
              className="btn btn-outline-danger"
              id="location"
              type="button"
            >
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </form>


    <div className="overview">
      <div className="row">
        <div className="col-6" id="main">
          <h1 id="city">{weather.mainCity}</h1>

          <ul>
            <li>
              Last updated: <span id="date"></span>
            </li>
            <li id="main-description">{weather.description}</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-7">
        <div className="clearfix weather-temp">
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            id="main-icon"
            className="float-left"
          />
          <div className="float-left">
            <strong id="main-temp">{weather.temperature}</strong>
            <span className="units">°C | °F</span>
          </div>
        </div>
      </div>
     
    <div className="col-5">
      <ul>
        <li>
          High/Low: <span id="high">{weather.maxCelsius}</span>°/
          <span id="low">{weather.minCelsius}</span>°
        </li>
        <li>
          Humidity: <span id="humidity">{weather.humidity}</span>%
        </li>
        <li>
          Wind: <span id="wind">{weather.wind}</span> Km/h
        </li>
      </ul>
    </div>
    </div>
    </div>);
  } else {
    return (<div>
        <form onSubmit={handleSubmit} id="search-form" className="mb-3" >
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Type city name here"
            className="form-control"
            id="city-input"
            autoComplete="off"
            autoFocus="on"
          />
        </div>
        <div className="col-3">
          <div className="btn-group" role="group">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
            <button
              className="btn btn-outline-danger"
              id="location"
              type="button"
            >
              <i className="fas fa-map-marker-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </form>


    <div className="overview">
      <div className="row">
        <div className="col-6" id="main">
          <h1 id="city">{props.city}</h1>

          <ul>
            <li>
              Last updated: <span id="date">Now</span>
            </li>
            <li id="main-description">Partially cloudy</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-7">
        <div className="clearfix weather-temp">
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            id="main-icon"
            className="float-left"
          />
          <div className="float-left">
            <strong id="main-temp">{props.temp}</strong>
            <span className="units">°C | °F</span>
          </div>
        </div>
      </div>
     
    <div className="col-5">
      <ul>
        <li>
          High/Low: <span id="high">12</span>°/
          <span id="low">5</span>°
        </li>
        <li>
          Humidity: <span id="humidity">12</span>%
        </li>
        <li>
          Wind: <span id="wind">3</span> Km/h
        </li>
      </ul>
    </div>
    </div>
    </div>)
  }
}
