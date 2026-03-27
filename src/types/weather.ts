export interface WeatherData {
    name:string;            // city name
    main: {
        temp:number;        // temperature
        humidity:number;    // humidity
        feels_like:number;  // Perceived Temperature
    };
    weather: {
        main:string;        // weather conditions
        description:string; // description
        icon:string;        // iconID
    }[];
    wind: {
        speed:number;       // wind speed
    };
    sys: {
        sunrise:number;     // sunrise time(UNIX)
        sunset:number;       // sunset time(UNIX)
    };
    timezone:number;        // timezone(sec)
}

// Search history Format
export interface SearchHistory {
    city:string;
    timestamp:number;
}