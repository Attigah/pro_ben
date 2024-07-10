import React, { useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg'

//http://www.omdbapi.com/?i=tt3896198&apikey=2e5d46cf
const API_URL = 'http://www.omdbapi.com?apikey=2e5d46cf';


//API SETTINGS.abk
const App = () => {
 
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

     return (
       <div className="app">
        <h1>MovieLand
            <div className="search">
                <input
                placeholder="Search for moives"
                value="Superman"
                onChange={() => {}}
                />
                <img
                src={searchIcon}
                alt="search"
                onClick={() => {}}
                />

            </div>
        </h1>

       </div>>
    );
}

export default App;
