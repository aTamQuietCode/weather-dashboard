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
    
    // 1. Load from localStorage on initialization
    const [history, setHistory] = useState<SearchHistory[]>(() => {
        const saved = localStorage.getItem("weather_history");
        return saved ? JSON.parse(saved) : [];
    });

    // 2. Automatically save when history is updated
    useEffect(() =>{
        localStorage.setItem("weather_history", JSON.stringify(history));
    }, [history]);

    // 3. Function to add history (leave the saving process to useEffect)
    const addToHistory = (city: string) => {
        setHistory((prev) => {
            const filtered = prev.filter((item) => item.city !== city);
            // slice(0, MAX_ITEMS) で最大数を維持
            return [{ city, timestamp: Date.now() }, ...filtered].slice(0, MAX_ITEMS);
        });
    };

    return (
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