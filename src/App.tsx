import "./App.css";
import { Weather } from "./components/Weather";

const API_KEY:string = "60906c90c0a127df7370bd0aca69cc21";
const TXT_TITLE:string = "Weather Dashboard";

function App() {
  return(
    <div className="app-layout">
      <h1>{TXT_TITLE}</h1>
      <Weather apiKey={API_KEY} />
    </div>
  );
}

export default App;