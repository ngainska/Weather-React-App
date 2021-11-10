export default function City(props) {
  return (
    <div className="overview">
      <div className="row">
        <div className="col-6" id="main">
          <h1 id="city">{props.city}</h1>

          <ul>
            <li>
              Last updated: <span id="date"></span>
            </li>
            <li id="main-description">Partly cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
