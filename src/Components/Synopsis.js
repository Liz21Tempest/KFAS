import SearhcbarS from "./SearchbarS";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Recent from "./Recent";
import "./synopsis.css";
import { Link } from "react-router-dom";
import RecentlyWatched from "./RecentContext";
import Toppage from "./Toppage";

function Synopsis({location}) {
  let { title, id } = useParams();
  const [state, dispatch] = useContext(RecentlyWatched);
  const [animeinfo, setanimeinfo] = useState({});
  const [animelist, setanimelist] = useState({});
  const [animeseason, setanimeseason] = useState(1);
  const [animeeps, setanimeeps] = useState({});
  //TO FETCH ANIME SUMMARY
  useEffect(() => {
    async function getThisAnime() {
      const thisResp = await fetch(
        `https://api.tvmaze.com/singlesearch/shows?q=${title}&embed=episodes`
      );
      const thisRespData = await thisResp.json();
      console.log(thisRespData);
      setanimeinfo(thisRespData);
    }
    getThisAnime();
  }, [title]);
  // TO FETCH ANIME BACKGROUND
  useEffect(() => {
    async function getThisAnimeList(animeeps) {
      const thisResp = await fetch(
        `https://api.tvmaze.com/shows/${id}/episodes`
      );
      const thisRespData = await thisResp.json();
      const seasonList = await getThisSeason(thisRespData);

      console.log({ thisRespData, seasonList });
      setanimelist({ seasonList });
    }
    getThisAnimeList();
  }, [title]);
  function getThisSeason(seasonData) {
    let placeholder = [];
    for (const eps of seasonData) {
      const season = eps.season;
      if (!placeholder[season]) {
        placeholder[season] = [];
      }
      placeholder[season].push(eps);
    }

    return placeholder;
  }
  function seasonSwitcher(index) {
    setanimeseason(index);
    console.log(animeseason);
  }
 
  return (
    <div>
      <Toppage location={location}></Toppage>

      <div className="grid">
        <div className="syp">
          <div className="epslength">
            {animeinfo?._embedded?.episodes?.length} eps
          </div>
          <img className="animeimg" src={animeinfo?.image?.medium} />
          <div className="divider">{animeinfo?.name}</div>
          <div
            className="summary"
            dangerouslySetInnerHTML={{ __html: animeinfo?.summary }}
          ></div>
          <div className="dividereps">SEASONS</div>
          <div className="epslist">
            {animelist.seasonList &&
              animelist.seasonList.map((animeseasonlist, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`seasonstyle ${index == animeseason ? "selected" : ""}`}
                    onClick={() => seasonSwitcher(index)}
                  >
                    {index}
                  </div>
                </React.Fragment>
              ))}
            {animelist.seasonList &&
              animelist.seasonList[animeseason].map((animeEpisode) => (
                <div className="epstyle">
                  <div className="epnumber">{animeEpisode.number}</div>
                  <div className="eptitle">{animeEpisode.name}</div>
                </div>
              ))}
          </div>
        </div>
        <Recent></Recent>
      </div>
    </div>
  );
}
export default Synopsis;

// let arr = [
//   [
//     {title:"something"},{}
//   ],
//   [
//     {},{}
//   ]
// ]

// arr[1][3].title
