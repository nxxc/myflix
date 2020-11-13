import React, { useEffect, useState } from 'react';
import axios from './axios.js';
import './Row.scss';

const baseUrl = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    // A snippet of code which runs based on a specific condition/variable
    //밖의 변수를 useEffect안에서 사용할 경우 []에 넣어 줘야함
    useEffect(() => {
        // if [] , run once when the row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
                {/* posters */}
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        className={`row__poster ${
                            isLargeRow && 'row__posterLarge'
                        }`}
                        src={`${baseUrl}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;
