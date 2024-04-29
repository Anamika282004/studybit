import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './Component/Navbar';
import LandingPage from './Component/LandingPage';
import Explore from './Component/Explore';
import Main from './Component/Main';
import Footer from './Component/Footer';
import Testimonials from './Component/Testimonials';
const app = ReactDOM.createRoot(document.getElementById("root"));
app.render(
        <>
        <Navbar/>
        <LandingPage/>
        <Explore/>
        <Main/>
        <Testimonials/>
        <Footer/>
        </>
    );