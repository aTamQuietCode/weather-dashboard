import { useState } from "react";
import "./Weather.css";
import { useWeather } from "../hooks/useWeather";
import { WeatherDisplay } from "./WeatherDisplay";

// const TXT_DEFAULT_CITY:string = "Tokyo";
const TXT_CHAMGE_WEATHER:string = "天気を変える";
const TXT_LOADING:string = "Loading...";
const TXT_CITY_NAME:string ="City name...";

// 他ファイルから受け取るデータの型定義
interface WeatherProps {
    apiKey: string;
}

export function Weather({apiKey}:WeatherProps) {
    const [inputCity, setInputCity] = useState("");
    const {weather, loading, fetchWeather} = useWeather(apiKey);

    return(
      <div className ="weather-container">
        <input
            value={inputCity}
            onChange={(e) => setInputCity(e.target.value)}
            placeholder={TXT_CITY_NAME}
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
