import "./WeatherDisplay.css";

const TXT_TEMPERATURE_UNITS = "℃";

interface WeatherDisplayProps {
    data: any;
}

export function WeatherDisplay({ data }: WeatherDisplayProps) {
  const weather = data.weather[0];
  const isNight = weather.icon.includes("n"); // n:night

  return (
    <div className={`display-area ${isNight ? "night-theme" : "day-theme"}`}>
      <h3>{data.name}</h3>
      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={weather.description}
      />
      <p>{data.weather[0].description}</p>
      <p>{Math.round(data.main.temp)}{TXT_TEMPERATURE_UNITS}</p>
    </div>
  );
}