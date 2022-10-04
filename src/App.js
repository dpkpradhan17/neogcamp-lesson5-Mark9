import "./styles.css";
import React, { useState } from "react";

const stateDict = {
  Punjab: [
    { foodName: "Chole-Bhature", Rating: "⭐ 4.9/5" },
    { foodName: "Dal Makhani", Rating: "⭐ 4.5/5" },
    { foodName: "Amritsari Kulcha", Rating: "⭐ 4/5" }
  ],
  Mumbai: [
    { foodName: "Varan Bhat", Rating: "⭐ 4.9/5" },
    { foodName: "The Bombay Sandwich", Rating: "⭐ 4.5/5" },
    { foodName: "Vada Pav", Rating: "⭐ 4/5" }
  ],
  Bihar: [
    { foodName: "Litti-Chokha", Rating: "⭐ 4.9/5" },
    { foodName: "Malpua", Rating: "⭐ 4.5/5" },
    { foodName: "Chana-Ghughni", Rating: "⭐ 4/5" }
  ]
};

export default function App() {
  const [selectedState, setState] = useState("Bihar");
  function stateSelected(states) {
    setState(states);
  }

  return (
    <div className="App">
      <h1>🍕Food🍔🌯</h1>
      <p>Some Awesome foods from different states.</p>
      <br />
      <hr />
      <br />
      <div id="state">
        {Object.keys(stateDict).map((states) => {
          return <span onClick={() => stateSelected(states)}>{states}</span>;
        })}
      </div>

      <div>
        <br />

        <ul>
          {stateDict[selectedState].map((item) => (
            <li key={item.foodName}>
              {" "}
              <div id="foodName">{item.foodName}</div>
              <div id="rate">{item.Rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
