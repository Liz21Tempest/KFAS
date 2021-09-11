import "./searhcbar.css";
import "./resultsstyle.css";
import React, { useState, useEffect } from "react";
import Results from "./Results";
import App from "../App";
function Searhcbar({ getAnime, getThisAnime }) {
  const [update, setUpdate] = useState();
  const handleupdate = (change) => {
    setUpdate(change.target.value);
  };

  const handleupdate1 = (change) => {
    if (change.code == "Enter") {
      getAnime(update);
      
    }
  };

  return (
    <div>
      <input
        className="searchinput"
        value={update}
        onChange={handleupdate}
        onKeyPress={handleupdate1}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default Searhcbar;
