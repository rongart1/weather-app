function WeatherDisplay({ data }){



    return(
    
    <div className="weather-display">
        <h2>Weather in: {data.location.name}</h2>
        <p>Tepeture: {data.current.temp_c} °C</p>
        <p>Humidity: {data.current.humidity} %</p>
        <p>Conditon: {data.current.condition.text}</p>
        <img src={data.current.condition.icon} alt="weather condition icon" />
        <p>Last updated: {data.current.last_updated}</p>
    </div>);
}

export default WeatherDisplay