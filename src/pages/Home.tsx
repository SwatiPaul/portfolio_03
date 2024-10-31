import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import image from '../img/img_1.jpeg';
import social from '../img/linkedin.svg'
import TypewriterComponent from "typewriter-effect";

interface abc {
  state:boolean;
  themeState:boolean;
}

const Home:React.FC<abc> = ({state,themeState}) => {

  return (
    <>
      <div className={`right_part ${themeState? '': 'dark'}`}>
        <div className="right_part_inner">
          <div className='rightinner_contain'>
            <div data-aos="fade-right" data-aos-duration="1200" >
              <div className="tokyo_home">
                <div className="home_content">
                  <div className="avatar">
                   <div className="avatar_img" style={{backgroundImage:`url(${image})`}}></div>
                  </div>
                  <div className="details">
                    <h3 className="name">Swati Paul</h3>
                    <h4 className="typer">
                      <TypewriterComponent
                      options={{
                        strings:[
                          'UI Developer',
                          'Frontend Developer ',
                          
                        ],
                        autoStart:true,
                        loop:true,
                        deleteSpeed:50,
                      }}
                      />
                    </h4>
                    <p className="job">Creative Frontend Developer, passionate about building responsive, user-friendly web applications and open to collaborative projects.</p>
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="material-icons">call</i>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:swatipaul047@gmail.com">
                          <i className="material-icons">mail</i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/swati-paul-2760701bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                          <img src={social} alt="linked_in" />
                        </a>
                      </li>
                    </ul>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
