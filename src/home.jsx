import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./homestylesheet.scss";

function HeadHome(){
    return(
        <div className="homediv">
           
            <img src="./IEDClogo.png" id="iedclogo"></img>
            <img src="./logoclg.jpg" id="ceclogo"></img>
            <div className="nameH">
            <h1>IEDC <span id="cecO">CEC</span></h1>
            <p id="captio">Let's turn your vision to mission</p>
            <div className="socialIcons">
            <SocialIcon url="https://instagram.com/iedc.cectl" bgColor="transparent" fgColor="aqua" style={{ height: 80, width: 80 }}/>
            <SocialIcon url="https://linkedin.com/iedc.cectl" bgColor="transparent" fgColor="aqua" style={{ height: 80, width: 80 }}/>
            <SocialIcon network="email" url="https://mail.google.com/mail/u/0/#inbox" bgColor="transparent" fgColor="aqua" style={{ height: 80, width: 80 }}/>
            </div>
            </div>
        </div>
    );
}
function HomeSecond(){
    return(
    <div className="homeS">
        <div className="containerHomeSecond">
            <h4>Looking for a forum to develop your idea?...</h4>
            <div className="paraAbox">
            <div className="Para1">
            <p>Then this is it. We at IEDC CEC, are ready to support you with everything you need. Our mentors consisting of industry experts, accomplished entrepreneurs, and xCECians are ready to nurture your idea and help you embrace the risk in the quest for being better and accept temporary setbacks as an inevitable part of the process of successful innovation.</p>
            </div>
            <div className="boxContainer">
                <div className="box1">
                    <div className="box2">
                        <img src="./IEDClogo.png" id="iedclogo"></img>
                        <span>About</span>
                    </div>
                    <div className="box2in"><span>Wanna Be One Of Us?</span>
                    <button id="applyBtn">Apply Now</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}
function HomeThird(){
    return(
        <div className="homeThird">
            <h1><u>Our Mentors</u></h1>
        </div>
    );
}
export {HeadHome,HomeSecond,HomeThird};