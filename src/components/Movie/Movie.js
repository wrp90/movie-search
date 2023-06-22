import { Link } from "react-router-dom";
import './Movie.css';

const Movie = ({ movie }) => {
    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <Link to={`/movie/${movie.imdbID}`}>More Details</Link>
        </div>
    )
};

export default Movie;