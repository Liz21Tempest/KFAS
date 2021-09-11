import "./greetings.css";
import React, { useState, useEffect, useContext } from "react";
import Toppageage from "./Toppage";
import AuthContext from "../AuthContext";
function Greetings() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  const user = useContext(AuthContext);
  console.log(user?.uid);
  return (
    <div>
      <div className="greet">
        やあ {user?.displayName}
        {/* <img className="fulllogo" src="/logofull.png"></img> */}
        <div className="time">
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </div>
      </div>
    </div>
  );
}
export default Greetings;
