import { useState, useEffect } from "react";
import "./Weather.css";
import { useWeather } from "../hooks/useWeather";
import { WeatherDisplay } from "./WeatherDisplay";
import { Button } from "./common/Button";
import { TextInput } from "./common/TextInput";
import { Clock } from "./Clock";
import { useWeatherContext } from "../contexts/WeatherContext";

const TXT_CHAMGE_WEATHER:string = "Change Weather";
const TXT_LOADING:string = "Loading...";
const TXT_CITY_NAME:string ="City name...";
const TEMP_HOT:number = 25;
const SPLIT_CHAR:string = " ";

export function Weather({apiKey}:{apiKey:string}) {
    const [inputCity, setInputCity] = useState("");

    // 1. Extract data and functions from theContext.
    const { currentWeather, setCurrentWeather, history, addToHistory } = useWeatherContext();

    // 2. Use a custum hook(the retrieved data is received here for now).
    const { weather, loading, error, fetchWeather } = useWeather(apiKey);

    // 3. When weather data is updated, reflect the changes in the Context.
    useEffect(() => {
        if (weather) {
            setCurrentWeather(weather);
            addToHistory(weather.name); // add city name to history
        }
    }, [weather, setCurrentWeather, addToHistory]);
    
    const temp = currentWeather?.main?.temp;
    const isNight = currentWeather?.weather[0].icon.includes("n");

    const weatherClass = [
        "weather-container",
        temp !== undefined && temp >= TEMP_HOT ? "hot" : "cold",
        isNight ? "night" : "day"
    ].join(SPLIT_CHAR);

    const handleSearch = () => {
        if (!inputCity.trim()) return;
        fetchWeather(inputCity);
        setInputCity("");
    };

    // A function to perform a new search when history is clicked.
    const handleHistoryClick = (city:string) => {
        fetchWeather(city);
    }

    return(
      <div className={weatherClass}>
        <TextInput
            value={inputCity}
            onChange={setInputCity}
            placeholder={TXT_CITY_NAME}
        />

        <Button
            label={TXT_CHAMGE_WEATHER}
            onClick={handleSearch}
            disabled={loading}
        />

        {/* 4. Search history display area */}
        {history.length > 0 && (
            <div className="search-history">
                <p>Recent Searches:</p>
                {history.map((item) => (
                    <button 
                        key={item.timestamp} 
                        onClick={() => handleHistoryClick(item.city)}
                        className="history-item"
                    >
                        {item.city}
                    </button>
                ))}
            </div>
        )}

        {error && (
            <p className="error-messag">
                ⚠️ {error}
            </p>
        )}

        {error && (
            <p className="error-messag">
                ⚠️ {error}
            </p>
        )}

        {loading ? (
            <p>{TXT_LOADING}</p>
        ) : (
            currentWeather && (
                <>
                    <Clock timezoneOffset={currentWeather.timezone} />
                    <WeatherDisplay data={currentWeather} />
                </>
            )
        )}
        </div>
    );
}
