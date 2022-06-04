import React from "react";
import "./about.css";
import avatar from "../../assets/avatar.png";


function About () {
    return(
        <div class="about-section">
            <img src={avatar} class="avatar" alt="avatar"/>
            <h4 class="about-text">
                Worked as a writer and editor in different fields for the past 11 years, 
                which has given me a good foundation in a professional environment.
                <br/>
                Completed a Full Stack Web Developer bootcamp with the University of Toronto
                to further my career.


            </h4>
        </div>
)}

export default About