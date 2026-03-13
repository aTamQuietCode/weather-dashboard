import { useState, useEffect } from "react";

const URL_OPENWEATHERMAP = "https://api.openweathermap.org/data/2.5/weather";
const ERR_NOT_FOUND_RESPONSE:string = "Not Found";
const ERR_NPT_FOUND_CITY:string = "都市が見つかりません。";
const TXT_SELECTED_CITY:string = "selectedCity";

export function useWeather(apiKey:string) {
    const[weather, setWeather] = useState<any>(null)
    const[loading, setLoading] = useState(true)
    const[city, setCity] = useState(localStorage.getItem('selectedCity') || 'Tokyo');

    const fetchWeather = async (targetCity: string) => {
        if (!targetCity) return;
        setLoading(true);
        const url = `${URL_OPENWEATHERMAP}?q=${targetCity}&appid=${apiKey}&units=metric&lang=ja`;

        try {
            const response = await fetch(url);
            if(!response.ok) throw new Error(ERR_NOT_FOUND_RESPONSE);
            const data = await response.json();
            setWeather(data);
            localStorage.setItem(TXT_SELECTED_CITY, targetCity);
        } catch (err) {
            alert(ERR_NPT_FOUND_CITY);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWeather(city);
    }, []);

    // コンポーネントで使いたいものだけを「外」に貸し出す
    return { weather, loading, fetchWeather };
}