import React from "react";
import author from "../img/img_1.jpg";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

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
                    <h3>Lorem Ipsum</h3>
                    <span>Lorem, ipsum dolor</span>
                  </div>
                  <div className="author_text">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque illo harum quia itaque provident!
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magni aspernatur quaerat voluptates minima aperiam?
                    </p>
                  </div>
                  <div className="short_info">
                    <div className="left">
                      <div className="tokyo_info">
                        <ul>
                          <li>
                            <span>Birthday:</span>
                            <span>01.01.2001</span>
                          </li>
                          <li>
                            <span>Birthday:</span>
                            <span>01.01.2001</span>
                          </li>
                          <li>
                            <span>Birthday:</span>
                            <span>01.01.2001</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="right">
                      <div className="tokyo_info">
                        <ul>
                          <li>
                            <span>Birthday:</span>
                            <span>01.01.2001</span>
                          </li>
                          <li>
                            <span>Birthday:</span>
                            <span>01.01.2001</span>
                          </li>
                          <li>
                            <span>Birthday:</span>
                            <span>01.01.2001</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="download_info">
                    <a href="#" download>
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
                                <span>WordPress</span>
                                <span>50%</span>
                              </p>
                              <BorderLinearProgress
                                variant="determinate"
                                value={50}
                              />
                            </div>
                          </li>
                          <li>
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
                          </li>
                          <li>
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
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="right">
                      <div className="title_heading">
                        <h3>Programming Skills</h3>
                      </div>
                      <div className="progress">
                        <ul>
                          <li>
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
                          </li>
                          <li>
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
                          </li>
                          <li>
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
                          </li>
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
                            <span>Bootstrap, Angular</span>
                          </li>
                          <li>
                            <i className="material-icons">arrow_right</i>
                            <span>Bootstrap, Angular</span>
                          </li>
                          <li>
                            <i className="material-icons">arrow_right</i>
                            <span>Bootstrap, Angular</span>
                          </li>
                          <li>
                            <i className="material-icons">arrow_right</i>
                            <span>Bootstrap, Angular</span>
                          </li>
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
                            <span>Bootstrap, Angular</span>
                          </li>
                          <li>
                            <i className="material-icons">arrow_right</i>
                            <span>Bootstrap, Angular</span>
                          </li>
                          <li>
                            <i className="material-icons">arrow_right</i>
                            <span>Bootstrap, Angular</span>
                          </li>
                          <li>
                            <i className="material-icons">arrow_right</i>
                            <span>Bootstrap, Angular</span>
                          </li>
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
                                <span>2014-2016</span>
                              </div>
                              <div className="place">
                                <h3>Oxford University</h3>
                                <span>Master Degree</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="time">
                                <span>2014-2016</span>
                              </div>
                              <div className="place">
                                <h3>Oxford University</h3>
                                <span>Master Degree</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="time">
                                <span>2014-2016</span>
                              </div>
                              <div className="place">
                                <h3>Oxford University</h3>
                                <span>Master Degree</span>
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
                                <span>2014-2016</span>
                              </div>
                              <div className="place">
                                <h3>Oxford University</h3>
                                <span>Master Degree</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="time">
                                <span>2014-2016</span>
                              </div>
                              <div className="place">
                                <h3>Oxford University</h3>
                                <span>Master Degree</span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="list_inner">
                              <div className="time">
                                <span>2014-2016</span>
                              </div>
                              <div className="place">
                                <h3>Oxford University</h3>
                                <span>Master Degree</span>
                              </div>
                            </div>
                          </li>
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
