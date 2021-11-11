import React from "react";
import Weather from "./Weather";
import Music from "./Music";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="background">
          <div className="weather-app-wrapper">
            <div className="weather-app" id="weather-app">
              <Weather city="Glasgow,UK" temp={8}/>
              <Music />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
