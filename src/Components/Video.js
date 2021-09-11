import Searhcbar from "./Searchbar";
import SearhcbarS from "./SearchbarS";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Recent from "./Recent";
import "./video.css";
import { Link } from "react-router-dom";
import RecentlyWatched from "./RecentContext";
import Toppage from "./Toppage";
function Video(){
    const [state, dispatch] = useContext(RecentlyWatched);
    const [animeinfo, setanimeinfo] = useState({});
    //TO FETCH ANIME EPS
    useEffect(() => {
      async function getThisAnime() {
        const thisResp = await fetch(
          `https://api.tvmaze.com/singlesearch/shows?q=${state?.currentanime?.show?.name}&embed=episodes`
        );
        const thisRespData = await thisResp.json();
        console.log(thisRespData);
        setanimeinfo(thisRespData);
      }
      getThisAnime();
    }, []);
       
    
    return(
        <div>
           <div></div> 
        </div>
    )
}
export default Video;