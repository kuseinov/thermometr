import { useState } from "react";
import "./components/Css.css";

function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const[temperatureColor,setTemperatureColor]=useState("cold")

const incriment=()=>{
  if(temperatureValue >=30) return
  const newTemperature=temperatureValue +1
  setTemperatureValue(newTemperature)
if (newTemperature >=15){
  setTemperatureColor('hot')
}


}

const dicriment=()=>{
  if(temperatureValue <=0)return
  const newTemperature=temperatureValue -1
  setTemperatureValue(newTemperature)
  if (newTemperature <15){
    
    setTemperatureColor('cold')
    
  }
}
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
        {temperatureValue} C</div>
      </div>
      <div className="button-container"></div>
      <button 
      onClick={()=>incriment()}>+</button>
      <button
        onClick={()=>dicriment()}>-</button>
    </div>
  );
}

export default App;
