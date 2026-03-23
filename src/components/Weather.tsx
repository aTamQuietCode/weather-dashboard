import { useState } from "react";
import "./Weather.css";
import { useWeather } from "../hooks/useWeather";
import { WeatherDisplay } from "./WeatherDisplay";
import { Button } from "./common/Button";
import { TextInput } from "./common/TextInput";

// const TXT_DEFAULT_CITY:string = "Tokyo";
const TXT_CHAMGE_WEATHER:string = "Change Weather";
const TXT_LOADING:string = "Loading...";
const TXT_CITY_NAME:string ="City name...";

// 他ファイルから受け取るデータの型定義
interface WeatherProps {
    apiKey: string;
}

export function Weather({apiKey}:WeatherProps) {
    const [inputCity, setInputCity] = useState("");
    const {weather, loading, fetchWeather} = useWeather(apiKey);

    const handleSearch = () => {
        fetchWeather(inputCity);
        setInputCity("");
    };

    return(
      <div className ="weather-container">

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

        {
            loading ? (
                <p>{TXT_LOADING}</p>
            ) : (
                weather && <WeatherDisplay data={weather} />
            )
        }
        </div>
    );
}
