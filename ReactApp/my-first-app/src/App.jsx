import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  let [state, SetState] = useState(0);
  let [red, SetRed] = useState(0);
  let [green, SetGreen] = useState(0);
  let [blue, SetBlue] = useState(0);
  useEffect(() => {
    console.log("Static Component");
  },[]);
  return (
    <div id="main" style={{ backgroundColor: `rgb(${red},${green},${blue})` }}>
      <label for="name">Name : </label>
      <input
        id="name"
        class="forms"
        type="text"
        placeholder="Enter your name"
      />
      <br />
      <label for="email">Email : </label>
      <input
        id="email"
        class="forms"
        type="email"
        placeholder="Enter your email"
      />
      <br />
      <label for="password">Password : </label>
      <input
        id="password"
        class="forms"
        type="password"
        placeholder="Enter your password"
      />
      <br />
      <button
        class="forms"
        onClick={() => {
          alert("Bhai Backend Nhi Hai Kahan Daalu isko");
        }}
      >
        Submit
      </button>
      <div className="count">
        <div>
          <button
            onClick={() => {
              SetState(state + 1);
            }}
          >
            Increase
          </button>
          <button
            onClick={() => {
              if (state > 0) SetState(state - 1);
            }}
          >
            Decrease
          </button>
          <button
            onClick={() => {
              SetState(0);
            }}
          >
            Reset
          </button>
        </div>
        <h2>Count : {state}</h2>
      </div>

      <button
        onClick={() => {
          SetRed(Math.floor(Math.random() * 256));
          SetGreen(Math.floor(Math.random() * 256));
          SetBlue(Math.floor(Math.random() * 256));
        }}
      >
        Change Color
      </button>
    </div>
  );
};
export default App;
