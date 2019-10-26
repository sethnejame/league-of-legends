import React from "react";

const StatsPage = () => (
  <div className="jumbotron">
    <h2>Stats</h2>
    <p>Below you can search for stats on your favorite LoL players.</p>
    <form>
      <div className="form-group">
        <label for="name">Player Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter Player Name..."
        />
      </div>
      <div className="form-group">
        <label for="region">Region:</label>
        <select type="text" id="region" className="form-control">
          <option value="" selected disabled hidden>
            Choose Region
          </option>
          <option>NA1</option>
          <option>EU</option>
          <option>Asia</option>
          <option>Something Else</option>
        </select>
      </div>
    </form>
  </div>
);

export default StatsPage;
