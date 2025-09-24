import React, { useEffect , useState } from "react";
import "./Home.css";
const Home = () => {
  const [iniValue, setiniValue] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) =>{ console.log(json);
    setiniValue(json);
      })
  }, []);
  return (
    <div>
      {iniValue.map((a) => (
        <div id="container">
        <h2 id="ids">{a.id}</h2>
         <p id="title">title{a.title}</p>
         </div>
      ))};
      
    </div>
  );
};

export default Home;
