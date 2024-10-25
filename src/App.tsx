import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./pages/Contact";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleTheme = () => {
    setTheme(!theme);
    console.log("theme", theme);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  });

  return (
    <Router>
      <div className="main_all">
        <Header
          func={toggleSidebar}
          themeState={theme}
          themefunc={toggleTheme}
        />
        <Sidebar state={isOpen} themeState={theme} />
        <div style={{position:'relative'}}>
          <div
            className={`toggle_switch large_screen ${theme ? "" : "dark"}`}
            onClick={toggleTheme}
          >
            {!theme ? (
              <i className="material-icons">light_mode</i>
            ) : (
              <i className="material-icons">dark_mode</i>
            )}
          </div>
          <Routes>
            <Route
              path="/"
              element={<Home state={isOpen} themeState={theme} />}
            />
            <Route path="/about" element={<About themeState={theme} />} />
            <Route path="/contact" element={<Contact themeState={theme} />} />
            <Route path="/service" element={<Contact themeState={theme} />} />

            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
