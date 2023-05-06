import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";


export default function Video() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div>
        {movies.map((movie, index) => (
          <div>
            <h5>{movie.Title}</h5>
          </div>
        ))}
      </div>

      <Link
        style={{
          textDecoration: "none",
          color: "white",
          background: "blue",
          padding: "10px",
          borderRadius: "5px",
          maxWidth: "70px"
        }}
        to="/"
      >
        Home
      </Link>


    </div>
  )
}