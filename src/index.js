import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Card from './Component/Card';
import Navbar from './Component/Navbar';
import Search from './Component/Search';
import LandingPage from './Component/LandingPage';
import Explore from './Component/Explore';
import Main from './Component/Main';
import Review from './Component/Review';
const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(
        <>
        <Navbar/>
        <LandingPage/>
        <Explore/>
        <Main/>
        <Review/>
        </>
    );