import React, {useState} from 'react';
import Search from '../search/index.jsx'
import Movie from '../movies/index.jsx'
import './home.less'
let Home = (props) => {

    return (
        <div className="home">
            <Search/>
            <Movie/>
        </div>
    )
}

export default Home;