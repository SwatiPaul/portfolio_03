import React from 'react';
import logo from '../img/logo_dark.png'

interface state{
  state:boolean;
  themeState:boolean;
}

const Sidebar:React.FC<state> = ({state,themeState}) => {
  return (
    <>
    <div className={`left_part  ${state ? 'open' : ''} && ${themeState ? '' : 'dark'} `}>
       <div className="leftpart_inner">
          <div className="logo">
            <a href="#" className={`navbar-brand ${themeState? '' : 'dark'}`}>
            <img src={logo} alt="_img_logo_dark" style={{color:'transparent'}} />
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="/">
                <i className="material-icons">home</i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/about">
                <i className="material-icons">person</i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="/projects">
                <i className="material-icons">settings</i>
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="/contact">
                <i className="material-icons">mail</i>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright">
              <p className='m-0'>
                @ 2024  <br/> Created by XYZ
              </p>
          </div>
       </div>
    </div>
    </>
  )
}

export default Sidebar