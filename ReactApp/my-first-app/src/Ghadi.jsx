import { useState } from "react";
import "./Ghadi.css";
const Ghadi = () => {
    let [time, setTime] = useState(new Date().toLocaleTimeString());
    setInterval(() => {
        setTime(new Date().toLocaleTimeString());
    },1000);
    return (
        <div id="time">
            <h1>Time</h1>
           <h1>{time}</h1>
        </div>
    );
}
export default Ghadi;