import React from 'react';
import "./Homepage.css";
import coun from "./coun.mp4";
import Navbar from '../../Navbar/Navbar';
import BlogHome from '../../Blogs/BlogHome';

export default function Homepage() {
  return (
    <div>
      <video autoPlay muted loop id="myVideo">
      <h1>lorem300</h1>
        <source src={coun} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      <div className="head">
      <Navbar/>
      </div>
      
      <BlogHome></BlogHome>
      </div>
  );
}
