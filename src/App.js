import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  const [Location, setLocation] = useState("");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${Location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;

  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="app">
      <div className="container">
        <div className="searchBar">
          <input
            type="text"
            placeholder="Enter Location Here ..."
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyPress={searchLocation}
          />
        </div>
        <div className="top">
          <div className="city">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? (
              <p className="bold">{data.weather[0].description}</p>
            ) : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="bottom">
            <div className="read-feel">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()} °F</p>
              ) : null}

              <p>feels like</p>
            </div>
            <div className="humadity">
              {data.main ? (
                <p className="bold">{data.main.humidity.toFixed()} %</p>
              ) : null}
              <p>humadity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
              ) : null}
              <p>wind speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
