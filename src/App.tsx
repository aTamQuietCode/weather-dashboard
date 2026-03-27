import "./App.css";
import { Weather } from "./components/Weather";
import {WeatherProvider} from "./contexts/WeatherContext";

const API_KEY:string = "60906c90c0a127df7370bd0aca69cc21";
//const TXT_TITLE:string = "Weather Dashboard";

function App() {
  return(
    <WeatherProvider>
      <div className="app-container">
        <h1>Weather Dashboard</h1>
        <Weather  apiKey={API_KEY} />
      </div>
    </WeatherProvider>
    /*
    <div className="app-layout">
      <h1>{TXT_TITLE}</h1>
      <Weather apiKey={API_KEY} />
    </div>
    */
  );
}

export default App;