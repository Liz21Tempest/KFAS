import "./resultsstyle.css";
import { Link } from "react-router-dom";
function Results({ getRecentAnime, animes = [] }) {
  return (
    <div>
      {animes.map((anime) => (
        <>
          <div className="container">
            {/* when user clicks on an anime it will run this function getRecentAnime */}
            <Link
              className="Img"
              to={`/synopsis/${anime.show.name}/${anime.show.id}`}
              onClick={() => getRecentAnime(anime)}
            >
              <img className="imga" src={anime?.show?.image?.original}></img>
            </Link>

            <div className="Title">
              <Link
                className="title"
                style={{ textDecoration: "none" }}
                to={`/synopsis/${anime.show.name}/${anime.show.id}`}
                onClick={() => getRecentAnime(anime)}

              >
                {anime.show.name}
              </Link>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
export default Results;
