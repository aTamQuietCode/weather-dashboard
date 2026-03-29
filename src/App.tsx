import "./App.css";
import { Weather } from "./components/Weather";
import {WeatherProvider} from "./contexts/WeatherContext";

const TXT_TITLE:string = "Weather Dashboard";
const API_KEY:string = import.meta.env.VITE_OPENWEATHER_API_KEY;

function App() {
  console.log("読み込まれたAPIキー:", API_KEY);
  return(
    <WeatherProvider>
      <div className="app-container">
        <h1>{TXT_TITLE}</h1>
        <Weather  apiKey={API_KEY} />
      </div>
    </WeatherProvider>
  );
}

export default App;