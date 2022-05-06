import { BrowserRouter, Routes,Route } from "react-router-dom";
import { First } from "../components/fisrt";
import { Home } from "../components/home";
import PropTypes from 'prop-types';
import React from 'react'

function Router({isFirst}){
    if(!isFirst){
       return(
            <Routes>
                <Route path="/" element={<First/>}/>
            </Routes>
       )
    }
    return(
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
    )
}
Router.propTypes = {
    isFirst:PropTypes.bool
}


export default Router