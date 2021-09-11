import react, { useState, useEffect } from "react";
import Results from "./Results";
import Toppage from "./Toppage";
import "./toppages.css";
function ToppageS() {
  // GREET SETTINGS

  // Greet me on home screen
  const [checkgreet, setCheckGreet] = useState(false);
  const handlegreethome = () => setCheckGreet(!checkgreet);

  // RECENT SETTINGS

  // Show recently watched on home screen
  const [checkrecenthome, setrecenthome] = useState(false);
  const handlerecenthome = () => setrecenthome(!checkrecenthome);

  // Show recently watched on video screen
  const [checkrecentvid, setrecentvid] = useState(false);
  const handlerecentvid = () => setrecentvid(!checkrecentvid);

  // PERKS SETTINGS

  // Only show perks progression bar on home screen
  const [checkperkhome, setperkhome] = useState(false);
  const handleperkhome = () => setperkhome(!checkperkhome);

  //Only show perks progression bar with no progress details
  const [checkperknodetails, setperknodetails] = useState(false);
  const handleperknodetails = () => setperknodetails(!checkperknodetails);

  //Disable perks progression bar
  const [checkperkdisable, setperkdisable] = useState(false);
  const handleperkdisable = () => setperkdisable(!checkperkdisable);

  //USER SETTINGS DATA
  const usersettings = [
    {
      greetonhome: { checkgreet },
    },
    {
      showrecentonhome: { checkrecenthome },
      showrecentonvid: { checkrecentvid },
    },
    {
      showperkhome: { checkperkhome },
      showperknodetail: { checkperknodetails },
      disableperkbar: { checkperkdisable },
    },
  ];

  //SET USER SETTINGS
  console.log(usersettings);
  if (checkgreet == true) {
    function hidegreet(){
      
    }
  } else {
  }

  return (
    <div>
      <Toppage></Toppage>

      <div className="greetset">
        <span className="space">Greet me on home screen</span>
        <label class="switch">
          <input
            type="checkbox"
            id="togBtn"
            onClick={handlegreethome}
            checkgreet={checkgreet}
          ></input>
          <div class="slider round"></div>
        </label>
      </div>
      <div className="recentset">
        <div className="space">
          Show recently watched on home screen
          <label class="switch">
            <input
              type="checkbox"
              id="togBtn"
              onClick={handlerecenthome}
              checkrecentonhome={checkrecenthome}
            ></input>
            <div class="slider round"></div>
          </label>
        </div>
        <div className="space">
          Show recently watched on video screen
          <label class="switch">
            <input
              type="checkbox"
              id="togBtn"
              onClick={handlerecentvid}
              checkrecentonvid={checkrecentvid}
            ></input>
            <div class="slider round"></div>
          </label>
        </div>
      </div>
      <div className="perkset">
        <p className="space">
          Only show perks progression bar on home screen
          <label class="switch">
            <input
              type="checkbox"
              id="togBtn"
              onClick={handleperkhome}
              checkperkhome={checkperkhome}
            ></input>
            <div class="slider round"></div>
          </label>
        </p>
        <p className="space">
          Only show perks progression bar with no progress details
          <label class="switch">
            <input
              type="checkbox"
              id="togBtn"
              onClick={handleperknodetails}
              checkperknodetails={checkperknodetails}
            ></input>
            <div class="slider round"></div>
          </label>
        </p>
        <p>
          Disable perks progression bar
          <label class="switch">
            <input
              type="checkbox"
              id="togBtn"
              onClick={handleperkdisable}
              checkperkdisable={checkperkdisable}
            ></input>
            <div class="slider round"></div>
          </label>
        </p>
      </div>
    </div>
  );
}

export default ToppageS;
