import React from "react";
import author from "../img/img_1.jpeg";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import portfolio from "../doc/swatipaulresume.pdf"

interface abt {
  themeState: boolean;
}

const About: React.FC<abt> = ({ themeState }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 3,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "#888585",
      ...theme.applyStyles("dark", {
        backgroundColor: "#308fe8",
      }),
    },
  }));
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
                        <span>About</span>
                        <h3>About me</h3>
                      </p>
                    </div>
                  </div>
                  <div className="tokyo_author">
                    <img src={author} alt="author" />
                  </div>
                  <div className="author_title">
                    <h3>Swati Paul</h3>
                    <span>Frontend Developer</span>
                  </div>
                  <div className="author_text">
                    <p>
                    I am a frontend developer dedicated to crafting intuitive, user-focused interfaces that balance functionality with aesthetic appeal. With expertise in HTML, CSS, JavaScript, and modern frameworks, I deliver responsive, accessible, and engaging web applications.
                    </p>
                    <p>
                    Passionate about transforming ideas into interactive digital experiences, I focus on blending creativity with technical expertise to deliver high-quality web applications that delight users and meet business goals.
                    </p>
                  </div>
                  <div className="short_info">
                    <div className="left">
                      <div className="tokyo_info">
                        <ul>
                          <li>
                            <span>Birthday:</span>
                            <span>04.02.1995</span>
                          </li>
                          <li>
                            <span>Address:</span>
                            <span>Baghbazar,Kolkata</span>
                          </li>
                          <li>
                            <span>Email:</span>
                            <span>swatipaul047@gmail.com</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="right">
                      <div className="tokyo_info">
                        <ul>
                          
                          <li>
                            <span>Study:</span>
                            <span>University of Calcutta</span>
                          </li>
                          <li>
                            <span>Degree:</span>
                            <span>Master</span>
                          </li>
                          <li>
                            <span>Interest:</span>
                            <span>Travel</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="download_info">
                    <a href={portfolio} download>
                      <span>Download CV</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="tokyo_progressbar">
                <div className="container">
                  <div className="inn">
                    <div className="left">
                      <div className="title_heading">
                        <h3>Programming Skills</h3>
                      </div>
                      <div className="progress">
                        <ul>
                          <li>
                            <div className="progress_inner">
                              <p className="m-0 pb-10 d-flex justify-between">
                                <span>HTML</span>
                                <span>70%</span>
                              </p>
                              <BorderLinearProgress
                                variant="determinate"
                                value={70}
                              />
                            </div>
                          </li>
                          <li>
                            <div className="progress_inner">
                              <p className="m-0 pb-10 d-flex justify-between">
                                <span>CSS</span>
                                <span>80%</span>
                              </p>
                              <BorderLinearProgress
                                variant="determinate"
                                value={80}
                              />
                            </div>
                          </li>
                          <li>
                            <div className="progress_inner">
                              <p className="m-0 pb-10 d-flex justify-between">
                                <span>JS</span>
                                <span>60%</span>
                              </p>
                              <BorderLinearProgress
                                variant="determinate"
                                value={60}
                              />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="right">
                      <div className="title_heading">
                        <h3>FrameWork & Library</h3>
                      </div>
                      <div className="progress">
                        <ul>
                          <li>
                            <div className="progress_inner">
                              <p className="m-0 pb-10 d-flex justify-between">
                                <span>React</span>
                                <span>60%</span>
                              </p>
                              <BorderLinearProgress
                                variant="determinate"
                                value={60}
                              />
                            </div>
                          </li>
                          <li>
                            <div className="progress_inner">
                              <p className="m-0 pb-10 d-flex justify-between">
                                <span>Angular</span>
                                <span>40%</span>
                              </p>
                              <BorderLinearProgress
                                variant="determinate"
                                value={40}
                              />
                            </div>
                          </li>
                          {/* <li>
                            <div className="progress_inner">
                              <p className="m-0 pb-10 d-flex justify-between">
                                <span>WordPress</span>
                                <span>50%</span>
                              </p>
                              <BorderLinearProgress
                                variant="determinate"
                                value={50}
                              />
                            </div>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tokyo_skill">
                <div className="container">
                  <div className="inn">
                    <div className="left">
                      <div className="title_heading">
                        <h3>Knowledge</h3>
                      </div>
                      <div className="skill_list">
                        <ul>
                          <li>
                            <i className="material-icons">arrow_right</i>
                            <span>Bootstrap,ReactBootstrap,MUI,Angular Material</span>
                          </li>
                          <li>
                            <i className="material-icons">arrow_right</i>
                            <span>React, Angular</span>
                          </li>
                          <li>
                            <i className="material-icons">arrow_right</i>
                            <span>Redux</span>
                          </li>
                          {/* <li>
                            <i className="material-icons">arrow_right</i>
                            <span>Bootstrap, Angular</span>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    <div className="right">
                      <div className="title_heading">
                        <h3>Interest</h3>
                      </div>
                      <div className="skill_list">
                        <ul>
                          <li>
                            <i className="material-icons">arrow_right</i>
                            <span>User-Centered Design</span>
                          </li>
                          <li>
                            <i className="material-icons">arrow_right</i>
                            <span>Performance Optimization</span>
                          </li>
                          <li>
                            <i className="material-icons">arrow_right</i>
                            <span>Exploring New Technologies</span>
                          </li>
                          {/* <li>
                            <i className="material-icons">arrow_right</i>
                            <span>Bootstrap, Angular</span>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tokyo_resume">
                <div className="container">
                  <div className="inn">
                    <div className="left">
                      <div className="title_heading">
                        <h3>Education</h3>
                      </div>
                      <div className="resume_list">
                        <ul>
                          <li>
                            <div className="list_inner">
                              <div className="time">
                                <span>2021-2022</span>
                              </div>
                              <div className="place">
                                <h3>Central Institute of Technology</h3>
                                <span>Web Development</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="time">
                                <span>2017-2020</span>
                              </div>
                              <div className="place">
                                <h3>Vidysagar University</h3>
                                <span>Master Degree</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="time">
                                <span>2016</span>
                              </div>
                              <div className="place">
                                <h3>Calcutta University</h3>
                                <span>Bachelor Degree</span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="right">
                      <div className="title_heading">
                        <h3>Experience</h3>
                      </div>
                      <div className="resume_list">
                        <ul>
                        <li>
                            <div className="list_inner">
                              <div className="time">
                                <span>2023-Present</span>
                              </div>
                              <div className="place">
                                <h3>Blu Cocoon Digital Pvt Ltd</h3>
                                <span>Associate UI Develper</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="time">
                                <span>2022-2023</span>
                              </div>
                              <div className="place">
                                <h3>UBK Infotech Pvt Ltd</h3>
                                <span>Frontend Developer</span>
                              </div>
                            </div>
                          </li>
                         
                          {/* <li>
                            <div className="list_inner">
                              <div className="time">
                                <span>2014-2016</span>
                              </div>
                              <div className="place">
                                <h3>Oxford University</h3>
                                <span>Master Degree</span>
                              </div>
                            </div>
                          </li> */}
                        </ul>
                      </div>
                    </div>
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

export default About;
