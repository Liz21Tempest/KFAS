import "./recentstyle.css";
import React, { useState, useContext } from "react";
import "./recentstyle.css";
import { Link } from "react-router-dom";
import RecentlyWatched from "./RecentContext";
function Recent({ getRecentAnime }) {
  const [state, dispatch] = useContext(RecentlyWatched);

  return (
    <div>
      <div className="recent">Recently watched</div>

      {state.recentList.map((recentanime) => (
        <React.Fragment key={recentanime.title}>
          <div className="recentclass">
            <div className="userrecent">
              <Link
                className="rimg"
                to={`/synopsis/${recentanime.title}/${recentanime.id}`}
                
              >
                <img className="rimga" src={recentanime?.img}></img>
              </Link>

              <Link
                className="rtitle"
                style={{ textDecoration: "none" }}
                to={`/synopsis/${recentanime.title}/${recentanime.id}`}
                
              >
                {recentanime?.title}
              </Link>
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
export default Recent;
