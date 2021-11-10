export default function Data() {
  return (
    <div className="col-5">
      <ul>
        <li>
          High/Low: <span id="high">20</span>°/
          <span id="low">10</span>°
        </li>
        <li>
          Humidity: <span id="humidity">67</span>%
        </li>
        <li>
          Wind: <span id="wind">12</span> Km/h
        </li>
      </ul>
    </div>
  );
}
