import Data from "./Data";

export default function Temperature(props) {
  return (
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
      <Data />
    </div>
  );
}
