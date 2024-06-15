import Search from "./components/Search";
import WeatherDisplay from "./components/Weather";
import React,{useState} from "react";
import './index.css';
function App() {

  const[ weatherData, setWeatherData] = useState(null);
  

  return (
    <div className="app">
      <h1>my weather app</h1>
      <Search fetechedData={setWeatherData}></Search>
      {weatherData ? <WeatherDisplay data={weatherData}/> : null}

    </div>
  );
}

export default App;
