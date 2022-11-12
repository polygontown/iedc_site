import React from 'react';
import "./aboutstylesheet.scss";
function About()
{
    return(
        <div className="aboutContainer">
            <div className="aboutTitle">
            
            <h2><img src="./IEDClogo.png" id="iedclogo"></img><span><u>about us</u></span></h2>
            </div>
            <p>" The Innovation and Entrepreneurship Development Cell of the College of Engineering, Cherthala is a student-run cell that seeks to create and enhance entrepreneurial skills and mindset among the students. Founded in January 2017, the cell works in close association with the Kerala StartUp Mission and other student clubs. Selected by the KSUM as one of the extension centers under Technopark TBI and accredited under the ICT Academy, the cell aims to provide various training programs for nourishing the skill in entrepreneurial activities in college. "</p>
        </div>
    );
}
export default About;