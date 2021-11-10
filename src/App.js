import React from "react";
import Search from "./Search";
import City from "./City";
import Temperature from "./Temperature";
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
              <Search />
              <City city="Glasgow, UK" />
              <Temperature temp={8} />
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
