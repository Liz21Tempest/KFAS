import Greetings from "./Greetings";
import Searhcbar from "./Searchbar";
import Toppage from "./Toppage";
import Results from "./Results";
import Recent from "./Recent";
import "./home.css";
import RecentlyWatched from "./RecentContext";
import React, { useState, useContext } from "react";
import AuthContext from "../AuthContext";
function Home({location}) {
  //RESP DATA STATE
  const [animes, setAnimes] = useState([]);

  const [state, dispatch] = useContext(RecentlyWatched);

  async function getAnime(update) {
    const resp = await fetch(`https://api.tvmaze.com/search/shows?q=${update}`);
    const respData = await resp.json();

    console.log(respData);
    setAnimes(respData.filter((anime) => anime.show.language == "Japanese"));
  }

  function getRecentAnime(anime) {
    //USER RECENTLY WATCHED DATA, when user clicks on an anime it will pe pushed into this array
    // myFunc([...recentAnime, item])
    dispatch({
      type: "addVideo",
      payload: {
        recent: { img: anime?.show?.image?.original, title: anime.show.name, id: anime.show.id },
        current: anime,
      },
    });
  }
  return (
    <div>
      <Toppage location={location} />
      <div className="pagelayout">
        <div>
          <Greetings />
          <Searhcbar getAnime={getAnime} />
          <Results getRecentAnime={getRecentAnime} animes={animes} />
        </div>

        <Recent getRecentAnime={getRecentAnime}/>
      </div>
    </div>
  );
}
export default Home;

// let test = ()=>{
//   return (
//     <div>
//       <div>
//         <Element1></Element1>
//         <Elemnt2></Elemnt2>

//       </div>
//     </div>
//   )
// }

// display:grid;
// grid-template-columns: 1fr auto;
