import { useState } from "react";
import "./Weather.css";
import { useWeather } from "../hooks/useWeather";
import { WeatherDisplay } from "./WeatherDisplay";
import { Button } from "./common/Button";
import { TextInput } from "./common/TextInput";
import { Clock } from "./Clock";

const TXT_CHAMGE_WEATHER:string = "Change Weather";
const TXT_LOADING:string = "Loading...";
const TXT_CITY_NAME:string ="City name...";
const TEMP_HOT:number = 25;
const SPLIT_CHAR:string = " ";

export function Weather({apiKey}:{apiKey:string}) {
    const [inputCity, setInputCity] = useState("");
    const {weather, loading, error, fetchWeather} = useWeather(apiKey);
    const temp = weather?.main?.temp;
    const isNight = weather?.weather[0].icon.includes("n");

    const weatherClass = [
        "weather-container",
        temp !== undefined && temp >= TEMP_HOT ? "hot" : "cold",
        isNight ? "night" : "day"
    ].join(SPLIT_CHAR);

    const handleSearch = () => {
        fetchWeather(inputCity);
        setInputCity("");
    };

    return(
      <div className ={weatherClass}>

        <TextInput
            value={inputCity}
            onChange={setInputCity}
            placeholder={TXT_CITY_NAME}
        />

        <Button
            label={TXT_CHAMGE_WEATHER}
            onClick={handleSearch}
            disabled = {loading}
        />

        {error && (
            <p className="error-messag">
                ⚠️ {error}
            </p>
        )}

        {
            loading ? (
                <p>{TXT_LOADING}</p>
            ) : (
                weather && (
                    <>
                        <Clock timezoneOffset={weather.timezone} />
                        <WeatherDisplay data={weather} />
                    </>
            )
        )}
        </div>
    );
}
