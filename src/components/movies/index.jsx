import React, {useState} from 'react';
import './movies.less';
import { connect } from 'react-redux'
import {
    Link
  } from "react-router-dom";
let Movie = (props) => {

    let renderMovies = () => {
  
        let movies = (props.id) 
            ? props.movies.filter(item => item.imdbID !== props.id) 
            : props.movies;
   
        return movies.map(item => {
            return (
                <div key={item.imdbID} className="movie-container">
                    <Link to={`/detail/${item.imdbID}`}>
                        <img className='movie-grid' src={item.Poster == "N/A" ? `${window.location.origin.toString()}/public/movie.jpg`: item.Poster} />
                    </Link>
                </div>
            )
        })
    }

    return (
        <div className={`grid-row-${props.row ? props.row : 3}`}>
            {
                renderMovies()
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        movies: state.movie.movies
    }
}

const mapDispatchToProps = dipatch => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Movie);