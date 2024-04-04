import React, { useState, useEffect } from "react";
import axios from "axios";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AirIcon from "@mui/icons-material/Air";

import { ReactComponent as AtmosphericPressure } from "../../assets/barometer.svg";
import { ReactComponent as WindDirection } from "../../assets/wind-direction.svg";
import { ReactComponent as Humididy } from "../../assets/humidity.svg";

import { locations, background, defaultGradient } from "./constants";
import { PageWrapper, OtherLocations } from "./styles";

const Home = () => {
  const [weather, setWeather] = useState(null);
  const [gradient, setGradient] = useState("");
  const [error, setError] = useState("");

  const geolocationAPI = navigator.geolocation;

  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      setError("Geolocation API is not available in your browser!");
    } else {
      geolocationAPI.getCurrentPosition(
        (position) => {
          const { coords } = position;
          locations[0].lat = coords.latitude;
          locations[0].lon = coords.longitude;

          getData({
            lat: coords.latitude,
            lon: coords.longitude
          });
        },
        (error) => {
          setError("Something went wrong getting your position!");
        }
      );
    }
  };

  const getData = async (coordinates) => {
    const { lat, lon } = coordinates;
    const params = {
      lat,
      lon,
      appid: "<OpenWeatherAPI>",
      units: "metric"
    };

    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      { params }
    );

    setWeather(data);
    handleGradientBackground(data.weather[0].main);
  };

  const handleGradientBackground = (type) => {
    switch (type) {
      case "Drizzle":
        return setGradient(background.sunny);

      case "Thunderstorm":
        return setGradient(background.thunderstorm);

      case "Clear":
        return setGradient(background.clear);

      case "Clouds":
        return setGradient(background.cloudy);

      case "Rain":
        return setGradient(background.rainy);

      case "Snow":
        return setGradient(background.snow);

      case "Atmosphere":
        return setGradient(background.overcast);

      default:
        setGradient(defaultGradient);
        break;
    }
  };

  useEffect(() => {
    getUserCoordinates();
  }, []);

  return (
    <>
      {weather ? (
        <PageWrapper gradient={gradient}>
          <OtherLocations>
            {locations.map((location) => (
              <div
                style={{
                  backgroundImage: `url(${location.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}
                className="location-card"
                onClick={() =>
                  location.name === "Current Location"
                    ? getUserCoordinates()
                    : getData(location)
                }
              >
                <h3>{location.name}</h3>
              </div>
            ))}
          </OtherLocations>
          <div>
            <div className="weather-details">
              <p className="degrees">
                {weather.main.temp.toFixed(1)} <span>°</span>
              </p>
              <div className="details">
                <p className="location">
                  {weather.name}, {weather.sys.country}
                </p>
                <p className="mood">{weather.weather[0].description}</p>
                <div className="temp-wrap">
                  <p>
                    <ArrowDownwardIcon style={{ marginRight: "5px" }} />
                    {weather.main.temp_min}
                    <span>°</span>
                  </p>
                  <p>
                    <ArrowUpwardIcon style={{ marginRight: "5px" }} />
                    {weather.main.temp_max}
                    <span>°</span>
                  </p>
                </div>
                <div className="temp-wrap">
                  <p>
                    <Humididy className="icon" />
                    {weather.main.humidity}
                  </p>
                  <p>
                    <AtmosphericPressure className="icon" />
                    {weather.main.pressure}
                  </p>
                </div>
                <div className="temp-wrap">
                  <p>
                    <AirIcon style={{ marginRight: "5px" }} />
                    {weather.wind.speed}
                  </p>
                  <p>
                    <WindDirection className="icon" />
                    {weather.wind.deg}
                  </p>
                </div>
              </div>
            </div>
            {error && <p>{error}</p>}
          </div>
        </PageWrapper>
      ) : (
        <div className="loading">
          <p>Loading</p>
        </div>
      )}
    </>
  );
};

export default Home;
