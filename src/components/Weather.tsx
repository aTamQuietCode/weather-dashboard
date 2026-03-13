import { useState } from "react";
import "./Weather.css";
import { useWeather } from "../hooks/useWeather";

// const TXT_DEFAULT_CITY:string = "Tokyo";
const TXT_CHAMGE_WEATHER:string = "天気を変える";
const TXT_LOADING:string = "Loading...";
const TXT_TEMPERTURE_UNITS:string = "℃";

// 他ファイルから受け取るデータの型定義
interface WeatherProps {
    apiKey: string;
}

export function Weather({apiKey}:WeatherProps) {
    const[inputCity, setInputCity] = useState("");
    const {weather, loading, fetchWeather} = useWeather(apiKey);

    return(
      <div className ="weather-container">
        <input
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
        />
        <button onClick={() => {fetchWeather(inputCity); setInputCity("");}} style={{marginLeft:"8px"}}>
            {TXT_CHAMGE_WEATHER}
        </button>

        {loading ? (
            <p>{TXT_LOADING}</p>
            ) : (
            weather && <WeatherDisplay data={weather} />
            )}
        </div>
    );
}

function WeatherDisplay({data}:{data:any}) {
    return (
        <div className="display-area">
            <h3>{data.name}</h3>
            <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                alt="weather icon"
            />
            <p>{data.weather[0].description}</p>
            <p>{data.main.temp}{TXT_TEMPERTURE_UNITS}</p>
        </div>
    )
}