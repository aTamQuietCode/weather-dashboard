import { useState, useEffect } from "react";

const URL_OPENWEATHERMAP = "https://api.openweathermap.org/data/2.5/weather";
// const ERR_NOT_FOUND_RESPONSE:string = "Not Found";
const ERR_NOT_FOUND_CITY:string = "Not found the City";
const TXT_SELECTED_CITY:string = "selectedCity";

export function useWeather(apiKey:string) {
    const[weather, setWeather] = useState<any>(null)
    const[loading, setLoading] = useState(true)
    const[city, _setCity] = useState(localStorage.getItem('selectedCity') || 'Tokyo');
    const[error, setError] = useState<string | null > (null);

    const fetchWeather = async (targetCity: string) => {
        if (!targetCity) return;
        setLoading(true);
        setError(null); // Error reset at the satart of data
        const url = `${URL_OPENWEATHERMAP}?q=${targetCity}&appid=${apiKey}&units=metric&lang=ja`;

        try {
            const response = await fetch(url);
            if(!response.ok) throw new Error(ERR_NOT_FOUND_CITY);
            const data = await response.json();
            setWeather(data);
            localStorage.setItem(TXT_SELECTED_CITY, targetCity);
        } catch (err:any) {
            setError(err.message);
            setWeather(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather(city);
    }, []);

    // コンポーネントで使いたいものだけを「外」に貸し出す
    return { weather, loading, error, fetchWeather };
}