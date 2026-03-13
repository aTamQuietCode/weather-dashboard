import "./App.css";
import { Clock } from "./components/Clock";
import { Weather } from "./components/Weather";

const API_KEY:string = "60906c90c0a127df7370bd0aca69cc21";
const TXT_TITLE:string = "My Dashboard";

function App() {

  return(
    <div style={{textAlign:"center", marginTop:"50px"}}>
      <h1>{TXT_TITLE}</h1>
      <hr style={{width:"50%", margin:"20px auto"}} />
      
      {/* コンポーネント呼び出し */}
      <Clock />

      <hr style={{width:"50%", margin:"20px auto"}} />

      <Weather apiKey={API_KEY} />
    </div>
  );
}

export default App;