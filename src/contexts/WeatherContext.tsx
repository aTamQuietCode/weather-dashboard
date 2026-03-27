import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { WeatherData, SearchHistory } from '../types/weather';

const MAX_ITEMS:number = 5;
const ERR_CONTEXT:string = 'useWeatherContext must be used within a WeatherProvider';

interface WeatherContextType {
    currentWeather:WeatherData | null;
    setCurrentWeather:(data:WeatherData) => void;
    history:SearchHistory[];
    addToHistory:(city:string) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({children}:{children:ReactNode}) => {
    const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
    const [history, setHistory] = useState<SearchHistory[]>([]);

    // Read history from localStorage at startup.
    useEffect(() =>{
        const saved = localStorage.getItem("weather_history");
        if (saved) {
            setHistory(JSON.parse(saved));
        }
    }, []);

    // A function to add history and save it to localStorage.
    const addToHistory = (city:string) => {
        setHistory((prev) => {
            // Remove duplicates and place the most recent at the top.
            const filtered = prev.filter((item) => item.city !== city);
            const newHistory = [{city, timestamp:Date.now()}, ...filtered].slice(0, MAX_ITEMS);
            localStorage.setItem("weather-history", JSON.stringify(newHistory));
            return newHistory;
        });
    };

    return(
        <WeatherContext.Provider value={{currentWeather, setCurrentWeather, history, addToHistory}}>
            {children}
        </WeatherContext.Provider>
    );
};

// Custom fooks for easily using Context
export const useWeatherContext = () => {
    const context = useContext(WeatherContext);
    if (!context) throw new Error(ERR_CONTEXT);
    return context;
};