import { useState } from "react";
import "./App.css";
const App = () => {
 let [state,SetState]= useState(0);

  function fun1() {
   SetState(state+1);
  }
    return (
      <div id="main">
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
        <input type="submit" class="forms" value="Submit" />
        <button onClick={fun1}>Click Me</button>
        <h2>Count : {state}</h2>;
      </div>
    );
  }
export default App;
