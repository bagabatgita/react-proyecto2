import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Weather from "./components/WeatherCard";
const API_KEY = "b2fa1df08fc3fcbb7bfc506bf59cb6e4";

function App() {
  const [coords, SetCoords] = useState();
  const [weather, setWeather] = useState();
  const [temps, setTemps] = useState();
  const [isCelsius, setIsCelsius] = useState();
  const [islanguage, setIsLanguage] = useState();

  const success = (e) => {
    const newCoords = {
      lat: e.coords.latitude,
      lon: e.coords.longitude,
    };
    SetCoords(newCoords);
  };

  const changeUnitTemp = () => setIsCelsius(!isCelsius);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (coords) {
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`;
      axios
        .get(URL)
        .then((res) => {
          setTimeout(() => {
            setWeather(res.data);
            const celsius = (res.data.main.temp - 273.15).toFixed(2);
            const fahrenheit = (celsius * (9 / 5) + 32).toFixed(2);
            const newTemps = {
              celsius,
              fahrenheit,
            };
            setTemps(newTemps);
          }, 1000);
        })
        .catch((err) => console.log(err));
    }
  }, [coords]);

  return (
    
    <div className="App">
      {
        weather ? (
          
      <Weather
        weather={weather}
        temps={temps}
        isCelsius={isCelsius}
        changeUnitTemp={changeUnitTemp}
      />
        ): <Loader />
      }
    </div>
  );
}

export default App;
