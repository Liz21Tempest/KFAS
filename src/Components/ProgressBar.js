import React, { useState, useContext, useEffect } from "react";
import "./progressbar.css";
function ProgressBar({ done }) {
  const [style, setStyle] = useState({});
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  // setTimeout(() => {
  //   const newStyle = {
  //     opacity: 1,
  //     width: `${done}%`,
  //   };
  //   setStyle(newStyle);
  return (
    <div className="progress">
      <div class="progess-done" style={style}>
        {done}
      </div>
    </div>
  );
}

export default ProgressBar;
// {dateState.toLocaleString("en-US", {
//   hour: "numeric",
//   minute: "numeric",
//   hour12: true,
// })}