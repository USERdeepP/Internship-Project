import React, { useState } from "react";
import axios from "axios";
import search from "./search.png";
import "./Home.css";
export default function Home() {
  const [data, setData] = useState({
    celcius: 10,
    name: "London",
    humidity: 20,
    speed: 2,
    pressure: 3,
    weather: "haze",
  });

  const [name, setName] = useState("");

  const handelSearch = () => {
    if (name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid='Your-Key'&units=metric`;
      axios
        .get(apiUrl)
        .then((res) => {
          setData({
            ...data,
            celcius: res.data.main.temp,
            name: res.data.name,
            humidity: res.data.main.humidity,
            pressure: res.data.main.pressure,
            speed: res.data.wind.speed,
            country: res.data.sys.country,
            weather: res.data.weather[0].main,
          });
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="container">
      <div className="weather">
        <div className="search">
          <input
            type="text"
            placeholder="Enter City Name"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handelSearch}>
            <img src={search} alt="1" />
          </button>
        </div>
        <div className="weinfo">
          <h1>{data.celcius}°C</h1>
          <h2>
            {data.name},{data.country}
          </h2>
          <h3>{data.weather}</h3>
        </div>
        <div className="details">
          <div className="col">
            <div className="info">
              <p>Humidity</p>
              <p>{data.humidity}%</p>
            </div>
          </div>
          <div className="col">
            <div className="info">
              <p>Pressure</p>
              <p>{data.pressure}</p>
            </div>
          </div>
          <div className="col">
            <div className="info">
              <p>Wind</p>
              <p>{data.speed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
