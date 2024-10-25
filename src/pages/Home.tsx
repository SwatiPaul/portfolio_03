import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import image from '../img/img_1.jpg';
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
                    <h3 className="name">abcghdgd hghghs</h3>
                    <h4 className="typer">
                      <TypewriterComponent
                      options={{
                        strings:[
                          'Lorem ipsum dolor ',
                          'consectetur adipisicing ',
                          'Eius iste doloremque'
                        ],
                        autoStart:true,
                        loop:true,
                        deleteSpeed:50,
                      }}
                      />
                    </h4>
                    <p className="job">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iste doloremque laboriosam doloribus dignissimos?</p>
                    <ul className="social">
                      <li>
                        <a href="#">
                          <i className="material-icons">call</i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="material-icons">mail</i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
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
