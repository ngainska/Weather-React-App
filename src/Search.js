import React from "react";
import axios from "axios";

export default function Search() {
  return (
 
    function handleSubmit(event){
        event.preventDefault();
        let apiKey = "b6a67f67579bcd300971f2f49b91d214";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
    }


    <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
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
    
  );
}
