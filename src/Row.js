import React, { useEffect, useState } from 'react';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import axios from './axios.js';
import './Row.scss';

const baseUrl = 'https://image.tmdb.org/t/p/original';

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    // A snippet of code which runs based on a specific condition/variable
    //밖의 변수를 useEffect안에서 사용할 경우 []에 넣어 줘야함
    useEffect(() => {
        // if [] , run once when the row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = async (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || 'JOKER')
                .then((url) => {
                    const urlParams = new URL(url).searchParams.get('v');
                    console.log(urlParams);
                    setTrailerUrl(urlParams);
                })
                .catch((e) => console.log(e));
        }
    };

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className='row__posters'>
                {/* posters */}
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
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
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
