import "./WeatherDisplay.css";

const TXT_TEMPERATURE_UNITS = "℃";

interface WeatherDisplayProps {
    data: any;
}

export function WeatherDisplay({ data }: WeatherDisplayProps) {
  return (
    <div className="display-area">
      <h3>{data.name}</h3>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
      <p>{data.weather[0].description}</p>
      <p>{Math.round(data.main.temp)}{TXT_TEMPERATURE_UNITS}</p>
    </div>
  );
}