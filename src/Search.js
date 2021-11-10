export default function Search() {
  return (
    <form id="search-form" className="mb-3">
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
