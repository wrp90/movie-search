import { useState } from "react";
import Movie from "../Movie/Movie";
import './MoviesPage.css'


const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchError, setSearchError] = useState('');

    const renderMovieList = () => {
        if (searchError) {
            return <p>{searchError}</p>
        };

        if (!movies.length) {
            return;
        };

        return (
            <>
                {movies.map((movie) => (
                    <Movie key={movie.imdbID} movie={movie} />
                ))}
            </>
        )
    };

    const searchMovies = async (event) => {
        event.preventDefault();
        const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=7bd43d9f`;
        
        fetch(url)
        .then((response) => response.json())
        .then((moviesJson) => {

            if (moviesJson.Error) {
                setSearchError(moviesJson.Error);
            } else {
                if (searchError) {
                    setSearchError('');
                }
                setMovies(moviesJson.Search);
            }
        });

        setSearchTerm('');
    };

    return (
        <div>
            <form onSubmit={searchMovies}>
                <label>
                    Search for a movie:
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(event) => setSearchTerm(event.target.value)}
                    />
                </label>
                <input type="submit" value="Search" />
                <div className="movie-list">
                    {renderMovieList()}
                </div>
            </form>
        </div>
    );
};

export default MoviesPage;