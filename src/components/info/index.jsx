import React, {useState} from 'react';
import { connect } from 'react-redux'
import './info.less'

let Info = (props) => {
    let movie = props.movies.find(item => item.imdbID == props.id)
    return (
        <div className="info">
            <div>
                <img src={movie.Poster == "N/A" ? `${window.location.origin.toString()}/public/movie.jpg`: movie.Poster} />    
            </div>
            <div>
                <span>Title: {movie.Title}</span>
                <span>Year: {movie.Year}</span>
                <span>Type: {movie.Type}</span>
            </div>
            
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
export default connect(mapStateToProps, mapDispatchToProps)(Info);