import { useMemo, useState } from "react";
import "./styles.css";

const DEFAULT_WEIGHT = 50;
const DEFAULT_HEIGHT = 150;

export default function BmiCalculator() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }

  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return weight / (calculatedHeight * calculatedHeight);
  }, [weight, height]);

  

  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="160"
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          min="140"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output.toFixed(2)}</p>
        <br/>
        <p><b>BMI Categories</b></p>
            <ul style={{textAlign : "left"}}>
                <li>Underweight =  less than 18.5</li>
                <li>Normal weight = 18.5-24.9</li>
                <li>Overweight = 25-29.9</li>
                <li>Obesity = BMI of 30 or greater </li>
            </ul>
        
      </div>
    </main>
  );
}
