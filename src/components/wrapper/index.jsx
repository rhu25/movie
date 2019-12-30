import React, {useState} from 'react';
import Home from '../home/index.jsx'
import Detail from '../detail/index.jsx'
import {
    Switch,
    Route
} from "react-router-dom";
let Wrapper = (props) => {

    return (
        <div>
             <Switch>
                <Route path="/detail/:id">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
           
        </div>
    )
}

export default Wrapper;