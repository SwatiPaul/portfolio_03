import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import project1 from '../img/project1.png';
import project2 from '../img/project2.png'

interface cntact {
  themeState: boolean;
}
interface data {
  name: string;
  email: string;
  msg: string;
}
const containerStyle = {
  width: "100%",
  height: "400px",
};

const Projects: React.FC<cntact> = ({ themeState }) => {


 
  return (
    <>
      <div className={`right_part ${themeState ? "" : "dark"}`}>
        <div className="right_part_inner">
          <div className="rightinner_contain">
            <div data-aos="fade-right" data-aos-duration="1200">
              <div className="container">
                <div className="tokyo_about">
                  <div className="tokyo_title">
                    <div className="title_flex">
                      <p className="m-0">
                        <span>Projects</span>
                        <h3>Project Showcase</h3>
                      </p>
                    </div>
                  </div>
                 
                </div>
                <div className="list_wrapper">
                    <ul className="aos-init aos-animate" data-aos="fade-right" data-aos-duration="1200">
                      <li>
                        <div className="inner">
                          <a href="https://justmovie.netlify.app/">
                            <img src={project1} alt="project1"  />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="inner">
                          <a href="#">
                            <img src={project2} alt="project1"  />
                          </a>
                        </div>
                      </li>
                     
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;





