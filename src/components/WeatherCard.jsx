import React from "react";

const WeatherCard = ({ weather, temps, isCelsius, changeUnitTemp }) => {
  return (
    <section>
      <h1 className="tama">
        <box-icon name="cloud"></box-icon>Weather APP
      </h1>
      <div className="columnita">
        <div>
          <h2>
            {weather?.name},{weather?.sys.country} :
            {isCelsius ? temps?.celsius + "°C" : temps?.fahrenheit + "°F"}
          </h2>
          <ul>
            <li>
              {weather?.weather[0].main},{weather?.weather[0].description}
            </li>
            <li>
              <p>
                <b>Win Speed:</b> {weather?.wind.speed} m/sec
              </p>
             
            </li>
            <li>
              <p>
                <b> Clouds:</b> {weather?.clouds.all} %
              </p>
             
            </li>
            <li>
              <p>
                <b> Pressure:</b>{weather?.main.pressure} hPa
              </p>
              
            </li>
            <li>
              <p>
                <b> Humidity:</b>{weather?.main.humidity} hPa
              </p>
              
            </li>
          </ul>
         
        </div>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
            alt="icon weather"
          />
        </div>
          <div> <button onClick={changeUnitTemp}>&deg;C / &deg;F</button></div>
         
      </div>
    </section>
  );
};

export default WeatherCard;
