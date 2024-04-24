import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Reviewinnercard from './Reviewinnercard';

function Review() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">  
              <Reviewinnercard name="Jon Martin" imageUrl="https://flowbite.com/docs/images/people/profile-picture-2.jpg" feedback="The website offered a wide range of courses catering to various interests, making it easy for me to find what I was looking for."/>
              <Reviewinnercard name="Alexendar" imageUrl="https://flowbite.com/docs/images/people/profile-picture-5.jpg" feedback="Navigation was intuitive, and the layout helped me quickly explore different courses and make informed decisions about my learning path."/>
              <Reviewinnercard name="Robin" imageUrl="https://flowbite.com/docs/images/people/profile-picture-3.jpg" feedback="I appreciated the diverse selection of courses available on the website, allowing me to explore new subjects and broaden my knowledge."/>             
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
            <Reviewinnercard name="Mickel Raw" imageUrl="https://tecdn.b-cdn.net/img/new/avatars/2.webp" feedback="The course descriptions were informative and helped me understand the content and requirements before enrolling in any program."/>
              <Reviewinnercard name="Sifra" imageUrl="https://flowbite.com/docs/images/people/profile-picture-4.jpg" feedback="The website's user-friendly interface made it convenient for me to browse through different categories and discover courses."/>
              <Reviewinnercard name="Carl Max" imageUrl="https://flowbite.com/docs/images/people/profile-picture-3.jpg" feedback="I found the website's recommendations feature helpful in discovering related courses based on my preferences."/>     
            </div>
          </div>
        
      
        </div>
        <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Review;
