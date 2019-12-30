import React, {useState} from 'react';
import Search from '../search/index.jsx'
import Movie from '../movies/index.jsx'
import Info from '../info/index.jsx'
import Nav from '../nav/index.jsx'
import './detail.less'
import { withRouter } from "react-router";
import {
    useParams
} from "react-router-dom";
let Detail = (props) => {
    let { id } = useParams();
    return (
        <div className="detail">
            <Nav />
            <Info id={id}/>
            <Movie id={id} row="2"/>
            
        </div>
    )
}

export default withRouter(Detail);