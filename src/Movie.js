import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                <h2>Hello React</h2>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <div>
                <img alt="" src="https://cms-assets.tutsplus.com/uploads/users/30/posts/19371/final_image/kitty-tut-final-lg.jpg" />
            </div>
        )
    }
}

export default Movie;