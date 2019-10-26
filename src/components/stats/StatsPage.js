import React from "react";
import axios from "axios";

const StatsPage = () => {
  const getPlayer = e => {
    e.preventDefault();
    axios
      .get(
        `https://${region}.api.riotgames./com/lol/summoner/v4/summoners/by-name/${name}`,
        {
          headers: {
            "X-Riot-Token": process.env.REACT_APP_PUBG_API_KEY
          }
        }
      )
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
  };

  return (
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
};

export default StatsPage;
