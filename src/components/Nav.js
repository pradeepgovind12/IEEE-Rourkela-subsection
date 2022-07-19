import React from 'react';
import "./nav.css";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <>
      <div className="nav-container">
        <div className="nav">
          <ul className="nav-list">
            <a href="https://www.ieee.org/" className="link">
              IEEE.org
            </a>
          </ul>
          <ul className="nav-list">
            <a
              href="https://ieeexplore.ieee.org/Xplore/home.jsp"
              className="link"
            >
              IEEE Xplore Digital Library
            </a>
          </ul>
          <ul className="nav-list">
            <a
              href="https://standards.ieee.org/?_ga=2.145015156.1940584581.1635243055-207427781.1635243055"
              className="link"
            >
              IEEE Standards
            </a>
          </ul>
          <ul className="nav-list">
            <a
              href="https://spectrum.ieee.org/?_ga=2.179686884.1940584581.1635243055-207427781.1635243055"
              className="link"
            >
              IEEE Spectrum
            </a>
          </ul>
          <ul className="nav-list">
            <a href="https://www.ieee.org/sitemap.html" className="link">
              More Sites
            </a>
          </ul>
        </div>
        <div className="home-top">
          <div className="home-top-mid">
            <a href ="https://www.ieee.org">
            <img
              src="https://purelifi.com/wp-content/uploads/2018/05/IEEE-Logo-1.png"
              alt="IEEE"
              className="img"
            ></img>
            </a>
          </div>
          <div className="home-top-left">
            <Link className="nav-ieee" to="/">
              <span className="home-top-text">IEEE Rourkela SubSection</span>
            </Link>
          </div>

          <div className="home-top-right">
            <a
              className="link"
              href="https://www.facebook.com/groups/ieeerourkelasubsection/"
            >
              {" "}
              <i className="fa-brands fa-facebook fa-2x home-icon"></i>
            </a>

            <a
              className="link"
              href="https://www.youtube.com/channel/UCp6nlg7x8BlbbeyN068mZdA"
            >
              {" "}
              <i className="fa-brands fa-youtube fa-2x home-icon"></i>
            </a>
            <a className="link" href="https://twitter.com/IeeeKolkata">
              {" "}
              <i className="fa-brands fa-twitter fa-2x home-icon"></i>
            </a>

            <Link className="link" to="/email">
              <i class="fa-solid fa-envelope fa-2x home-icon"></i>
            </Link>
          </div>
        </div>
        <div className="home-middle">
          <ul className="home-middle-links">
            <Link className="link" to="/">
              Home
            </Link>
          </ul>
          <ul className="home-middle-links">
            <Link className="link" to="/about">
              About Us
            </Link>
          </ul>

          <div className="dropdown home-middle-links">
            <button className="dropbtn">
              Organizations units<i className="fa-solid fa-caret-down drop"></i>
            </button>
            <div class="dropdown-content">
              <Link className="link" to="/society">
                Society Chapter
              </Link>
              <Link className="link" to="/studentBranches">
                Student Branches
              </Link>
              <Link className="link" to="/Academic">
                Industry-Academic Form
              </Link>
            </div>
          </div>
          <div className="dropdown home-middle-links">
            <button className="dropbtn">
              Committee<i className="fa-solid fa-caret-down drop"></i>
            </button>
            <div className="dropdown-content">
              <Link className="link" to="/members">
                Executive Committee
              </Link>
              <Link className="link" to="/slate">
                SLATE
              </Link>
              <Link className="link" to="/report">
                Subsection Report
              </Link>
            </div>
          </div>
          <div className="dropdown home-middle-links">
            <button className="dropbtn">
              Activities<i className="fa-solid fa-caret-down drop"></i>
            </button>
            <div className="dropdown-content">
              <Link className="link" to="/studentActivity">
                Student Activities
              </Link>
              <Link className="link" to="/socialEvents">
                Social Events
              </Link>
              <Link className="link" to="/techEvents">
                Technical Events
              </Link>
            </div>
          </div>
          <ul className="home-middle-links">
            <Link className="link" to="/event">
              Events
            </Link>
          </ul>
          <ul className="home-middle-links">
            <Link className="link" to="/gallery">
              Gallery
            </Link>
          </ul>
          <ul className="home-middle-links">
            <Link className="link" to="/email">
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
