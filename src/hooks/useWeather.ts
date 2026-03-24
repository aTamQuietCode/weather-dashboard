import { useState, useEffect } from "react";

const URL_OPENWEATHERMAP = "https://api.openweathermap.org/data/2.5/weather";
const ERR_NOT_FOUND_CITY:string = "Not found the Cit. Please enter a valid name.";
const TXT_SELECTED_CITY:string = "selectedCity";
const CITY_INITIAL:string = "Tokyo";
const LANG_WEATHER:string = "ja";

export function useWeather(apiKey:string) {
    const[weather, setWeather] = useState<any>(null)
    const[loading, setLoading] = useState(true)
    const[city, _setCity] = useState(localStorage.getItem('selectedCity') || 'Tokyo');
    const[error, setError] = useState<string | null > (null);

    const fetchWeather = async (targetCity: string) => {
        if (!targetCity) return;
        setLoading(true);
        setError(null); // Reset the previous error when communication begins
        
        const url = `${URL_OPENWEATHERMAP}?q=${targetCity}&appid=${apiKey}&units=metric&lang=${LANG_WEATHER}`;

        try {
            const response = await fetch(url);
            
            // Response != 200(OK) (e.g.,404:incorrect city name)
            if(!response.ok) {
                throw new Error(ERR_NOT_FOUND_CITY);
            }
            
            const data = await response.json();
            setWeather(data);
            localStorage.setItem(TXT_SELECTED_CITY, targetCity);
        } catch (err:any) {
            setWeather(null);       // When an error occurs, the old weather data is deleted.
            setError(err.message);  // Set error message
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        city ? (fetchWeather(city)) :
        (fetchWeather(CITY_INITIAL))   // initial value
    }, []);

    // コンポーネントで使いたいものだけを「外」に貸し出す
    return { weather, loading, error, fetchWeather };
}