import React, { useState } from "react";
import axios from "axios";

const StatsPage = () => {
  const [req, setReq] = useState({
    region: "",
    name: ""
  });

  const handleChange = e => {
    const newReq = { ...req, [e.target.name]: e.target.value };
    setReq({...newReq});
    console.log(req);
  };

  const getPlayer = e => {
    e.preventDefault();
    axios
      .get(
        `https://${req.region}.api.riotgames./com/lol/summoner/v4/summoners/by-name/${req.name}`,
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
      <form onSubmit={getPlayer}>
        <div className="form-group">
          <label>Player Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter Player Name..."
            value={req.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Region:</label>
          <select
            type="text"
            id="region"
            name="region"
            className="form-control"
            value={req.region}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Choose Region
            </option>
            <option value="na1">North America</option>
            <option value="eun1">Europe Nordic & East</option>
            <option value="euw1">Europe West</option>
            <option value="tr">Turkey</option>
            <option value="la1">Latin America 1</option>
            <option value="la2">Latin America 2</option>
            <option value="br1">Brazil</option>
            <option value="oc1">Oceania</option>
            <option value="jp1">Japan</option>
            <option value="kr">Korea</option>
            <option value="ru">Russia</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Find Player
        </button>
      </form>
    </div>
  );
};

export default StatsPage;
