import React, {useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.jsx'; 

//http://www.omdbapi.com/?i=tt3896198&apikey=2e5d46cf
const API_URL = 'http://www.omdbapi.com?apikey=2e5d46cf';

const movie1 = {
        "Title": "Spiderman",
        "Year": "1990",
        "imdbID": "tt0100669",
        "Type": "movie",
        "Poster": "N/A"
}
//API SETTINGS.abk
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
 
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

     return (
    <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
                <input
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />


                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(setSearchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ?  (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }    
    </div>      
    );
}

export default App;
