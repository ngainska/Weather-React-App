
import axios from "axios";


export default function Forecast(props){
    function formatDay(timestamp){
let date = new Date(timestamp * 1000);
let day = date.getDay();
let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
return days[day]; 
}
let forecastData = [];

function displayForecast(response){
  console.log(response);
  forecastData = response.data.daily;

  let forecast = document.querySelector("#forecast");

  let forecastHTML = `<div class = "row">`;
  forecastData.forEach(function(forecastDay, index) {
if (index < 6){

let forecastMaxCelsius = Math.round(forecastDay.temp.max);
let forecastMinCelsius = Math.round(forecastDay.temp.min);
forecastHTML = forecastHTML + `<div class = "col-2"> 
                        <div class = "forecast-day">
                            ${formatDay(forecastDay.dt)}
                        </div>
                    <img src="https://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" alt="" width="70" id="forecast-icon"/> 
                    <div class="forecast-temp">
                        <span class="forecast-high">${forecastMaxCelsius}</span>° <span class="forecast-low">${forecastMinCelsius}</span>°
                    </div>
                    
                    </div>`;
}
  });

  forecastHTML = forecastHTML + `</div>`;
  forecast.innerHTML= forecastHTML;

}

//let lat= props.coordinates.lat;
//let lon= props.coordinates.lon;
  let apiKey = "b6a67f67579bcd300971f2f49b91d214";
  let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
   
  axios.get(apiURL).then(displayForecast);
  

}