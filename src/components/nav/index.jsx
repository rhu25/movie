import React, {useState} from 'react';
import './nav.less'
import { useHistory } from "react-router-dom";
let Nav = (props) => {
    let history = useHistory();
    return (
        <div className="nav">
            <div class="back" onClick={() => {history.goBack()}}>
                Back
            </div>
            <div class="main" onClick={() => {history.push('/')}}>
                Main
            </div>
            
        </div>
    )
}

export default Nav;