import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleMovie = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=7bd43d9f`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setMovie(data);
        })
    }, []);

    return (
        <div className="single-movie">
            <h1>{movie.Title}</h1>
            <h2>{movie.Year}</h2>
            <h3>{movie.Rated}</h3>
            <img src={movie.Poster}></img>
        </div>
    );
};

export default SingleMovie;