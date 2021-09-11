import Toppage from "./Toppage";
import React, { useState, useContext } from "react";
import AuthContext from "../AuthContext";
import { auth } from "./firebase";
import firebase from "firebase/app";
import "./searchbarS.css";
function SearchbarS({ getAnime, getThisAnime }) {
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
    <input
      className="searchinputS"
      type="text"
      placeholder="Search"
      value={update}
      onChange={handleupdate}
      onKeyPress={handleupdate1}
    />
  );
}

export default SearchbarS;
