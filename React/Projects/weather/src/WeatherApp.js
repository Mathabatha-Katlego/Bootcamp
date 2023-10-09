import { useState } from "react";
import WeatherInfo from "./WeatherInfo";

function WeatherApp() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const changeCityInput = (e) => {
    setCityName(e.target.value);
  };


  const fetchWeatherAPI = async () => {
    const APIkey = "e257d39b7b16933ed142ff9a1b4c93f6";
    //const APIurl = https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=e257d39b7b16933ed142ff9a1b4c93f6;
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIkey}`;
    const resp = await fetch(APIurl);
    const respJson = await resp.json();
    setWeatherData(respJson);
  }

    let handleMouseOut = (e) => {
      fetchWeatherAPI();
    };

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h3 className="text-center text-success"> React Weather App</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter City Name"
                  onChange={changeCityInput}
                  onMouseOut={handleMouseOut}
                  value={cityName}
                />
              </div>
              {/* Weather app info*/}
              <WeatherInfo cityName={cityName} weatherData={weatherData} />
              {/* Weather app info*/}
            </div>
          </div>
        </div>
      </>
    );
  }


  export default WeatherApp;
