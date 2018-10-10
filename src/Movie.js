import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';


function Movie ({title, poster}){
    return (
        <div>
            <MoviePoster poster={poster} />
            <h2>{title}</h2>
        </div>
    )
}


function MoviePoster ({poster}){
    return(
        <div>
            <img alt="" src={poster} />
        </div>
    )
}


Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
}


export default Movie;