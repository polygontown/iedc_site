import React, { useRef , useState, useEffect} from 'react';
import './App.css';
import "./homestylesheet.scss";
import "./navbarstylesheet.scss";
import {HeadHome,HomeSecond} from './home';
import About from './about';
import Ideabox from './ideabox';
import Team from './team';
function App() {
  
  const ref = useRef(null);
  const homeref = useRef(null);
  const teamRef = useRef(null);
  const gotoAbout = () => {
    window.scrollTo({top:ref.current.offsetTop,
    behavior:"smooth"
  });
  var x = document.getElementById("aboutNav");
  changeColor();
  document.getElementById("aboutNav").style.color = "white";
};
const gotoHome = () => {
  window.scrollTo({top:0,
  behavior:"smooth",
});
changeColor();
document.getElementById("homeNav").style.color = "white";
};
const gotoTeam = () => {
  window.scrollTo({top:teamRef.current.offsetTop,
    behavior:"smooth"
});
changeColor();
document.getElementById("teamNav").style.color = "white";
};

const changeColor = () => {
  document.getElementById("homeNav").style.color = "";
  document.getElementById("aboutNav").style.color = "";
  document.getElementById("teamNav").style.color = "";
  document.getElementById("eventsNav").style.color = "";
  document.getElementById("galleryNav").style.color = "";
  document.getElementById("projectsNav").style.color = "";
  document.getElementById("contactsNav").style.color = "";
};
  return (
    <div className="App">
         <div className="navbar">
            <ul>
              <div className='navElements'>
                <li onClick={gotoHome} id="homeNav">Home</li>
                <li onClick={gotoAbout} id="aboutNav">About</li>
                <li onClick={gotoTeam}id='teamNav'>Team</li>
                <li id='eventsNav'>Events</li>
                <li id='galleryNav'>Gallery</li>
                <li id='projectsNav'>Projects</li>
                <li id='contactsNav'>Contact</li>
                </div>
            </ul>
        </div>
        <div className="homeSection" ref={homeref}>
          <HeadHome/>
          <HomeSecond/>
        </div>
        <div className="aboutSection" ref={ref}>
        <About/>
        <div className="teamSection" ref={teamRef}>
          <Team/>
        </div>
        <Ideabox/>
        </div>
    </div>
  );
 
}


export default App;
