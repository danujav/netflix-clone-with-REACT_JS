import React, { useState, useEffect }  from 'react';
import axios from './axios';
import './Row.css';

 const base_Url = "https://image.tmdb.org/t/p/original/";

function Row({ title , fetchUrl}) {
    const [movies, setMovies] = useState([]);

    //A snippet of code which runs based on a specific condition/variable
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
             console.log(request.data.results);
            setMovies(request.data.results)
            
            return request;
        }
        fetchData();
    }, [fetchUrl]);

     console.table(movies)

    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>

            <div className="row__posters">
                {/* seversal row__poster(s) */}

                {movies.map(movie => (
                    <img 
                    key={movie.id} //for little bit optimization
                    className="row__poster"
                    src={`${base_Url}${movie.poster_path}`} alt={movie.name} />
                ))}
                
            </div> 


            {/* container -> poster*/}
        </div>
    )
}

export default Row
