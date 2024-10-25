import React, { useState } from "react";
import logo from "../img/logo_dark.png";

interface abc {
  func: any;
  themeState: boolean;
  themefunc: any;
}

const Header: React.FC<abc> = ({ func, themeState, themefunc }) => {
  return (
    <>
      <div className="header">
        <div className={`header_inner ${themeState ? '' : 'dark'} `}>
          <div className="logo">
            <a href="http://">
              <img
                src={logo}
                alt="logo_dark"
                style={{ color: "transparent" }}
              />
            </a>
          </div>

          <div className="trigger_point">
            <div className={`toggle_switch ${themeState? '' : 'dark'}`} onClick={themefunc}>
              {!themeState ? (
                <i className="material-icons">light_mode</i>
              ) : (
                <i className="material-icons">dark_mode</i>
              )}
            </div>
            <div className="hamburger" onClick={func}>
              <div className="hamburger-box">
                <i className={`material-icons ${themeState ? 'dark' : ''}`}>menu</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
