import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Scroll from "./scroll/Scroll";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-image">
        <div className="home-image-test"></div>
      </div>
      <div className="home-news">
        <div className="home-news-left">
          <ul className="home-news-left-1">
            <h3 className="home-news-head">About Section</h3>
            <li className="home-news-list">
              <Link className="link" to="/mission">
                Mission/ Vision
              </Link>
            </li>
            <li className="home-news-list">
              <Link className="link" to="/pride/awards">
                Accomplishment
              </Link>
            </li>
            <li className="home-news-list">
              <Link className="link" to="/members">
                Executive Committee
              </Link>
            </li>
            <li className="home-news-list">
              <Link className="link" to="/pride">
                Section's Pride
              </Link>
            </li>
          </ul>
          <ul className="home-news-left-2">
            <h3 className="home-news-head">For Members</h3>
            <li className="home-news-list">
              <a
                href="https://www.ieee.org/membership/renew.html"
                className="link"
              >
                Renew your membership
              </a>
            </li>
            <li className="home-news-list">
              <a href="https://www.ieee.org/communities/" className="link">
                Join a community
              </a>
            </li>
            <li className="home-news-list">
              <a
                href="https://mga.ieee.org/resources-operations/geographic-unit/chapters/how-to-create-a-new-ieee-chapter"
                className="link"
              >
                Create a society chapter
              </a>
            </li>
            <li className="home-news-list">
              <a
                href="https://mga.ieee.org/resources-operations/formations-petitions#student"
                className="link"
              >
                Create a student branch chapter
              </a>
            </li>
            <li className="home-news-list">
              <a
                href="https://mga.ieee.org/resources-operations/formations-petitions#branch-chapters"
                className="link"
              >
                Create a student branch
              </a>
            </li>
          </ul>
          <ul className="home-news-left-3">
            <h3 className="home-news-head">Get Involved</h3>
            <li className="home-news-list">
              <a
                href="https://www.ieee.org/membership/join/index.html"
                className="link"
              >
                Become a member
              </a>
            </li>
            <li className="home-news-list">
              <a
                href="https://www.ieee.org/about/volunteers/ieee-volunteering-opportunities.html"
                className="link"
              >
                Volunteer
              </a>
            </li>
            <li className="home-news-list">
              <a
                href="https://www.ieee.org/membership-catalog/index.html?srchProdType=Societies&searchType=prodType"
                className="link"
              >
                Join a Society
              </a>
            </li>
            <li className="home-news-list">
              <a
                href="https://www.ieee.org/conferences/organizers/conference-application-form.html"
                className="link"
              >
                Organize a conference
              </a>
            </li>
            <li className="home-news-list">
              <a
                href="https://journals.ieeeauthorcenter.ieee.org/submit-your-article-for-peer-review/the-ieee-article-submission-process/"
                className="link"
              >
                Publish a paper
              </a>
            </li>
            <li className="home-news-list">
              {" "}
              <a
                href="https://standards.ieee.org/about/membership/"
                className="link"
              >
                join a student working group
              </a>
            </li>
          </ul>
        </div>
        <div className="home-news-mid">
          <h1 className="home-news-mid-head">News / Announcements</h1>
          <hr className="line"></hr>
          <div className="home-news-scroll-text">
            <div className="home-news-mid-para">
              <p>
                Registration for the 2022 IEEE International Symposium on
                Biomedical Imaging (ISBI) is now open! This conference is coming
                to Kolkata and we feel this would be a great opportunity for
                members of the IEEE Kolkata Section to attend.
              </p>
              <p>
                Ms. Debi Dutta, IEEE APS SBC Chair,CU, received IEEE APS PhD
                travel grant award for the year of 2021 in Singapore. IEEE MTT-S
                SBC, Jadavpur University has been adjudged for the "2021 IEEE
                MTT-S Outstanding Chapter Award.
              </p>
              <p>
                Mr. Ardhendu Kundu, Ex-Chair of IEEE MTT-S SBC (2020), JU, is
                the winner of "IEEE Region 10 Young Professionals REVOL 2021
                program" and currently acting as the "IEEE Region10 YP
                Ambassador".
              </p>
              <p>
                The IEEE NIT Silchar Student Branch (EDS) Chapter has been
                selected as the 2021 recipient of the IEEE Electron Devices
                Society Student Branch Chapter of the Year Award.
              </p>
            </div>
          </div>
        </div>
        <div className="home-news-right">
          <img
            src="https://ewh.ieee.org/r10/calcutta/images/2021_Recognition_Award_Banners_Gold_Kolkata%20Section.jpg"
            alt="award"
            className="home-news-right-img"
          />
        </div>
      </div>
      <hr />
      <h1 className="home-event-head">Upcoming Events</h1>
      <div className="event-container">
        <div className="event-left">
          <div className="event-1">
            <img
              src="https://ewh.ieee.org/r10/calcutta/images/CALCON_2022.jpg"
              alt=""
              className="event-img"
            />
            <div className="event-2">
              <h1 className="event-date">15-17 July, 2022</h1>
              <h2 className="event-name">CALCON 2022 - Kolkata, India</h2>
              <p className="event-des">
                CALCON is the flagship conference of the IEEE Kolkata Section.
              </p>
              <button className="event-btn">
                <Link className="link1" to="/event">
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="event-mid">
          <div className="event-1">
            <img
              src="https://ewh.ieee.org/r10/calcutta/images/Indiscon22.jpg"
              alt=""
              className="event-img"
            />
            <div className="event-2">
              <h1 className="event-date">10-11 December, 2022</h1>
              <h2 className="event-name">CALCON 2022 - Kolkata, India</h2>
              <p className="event-des">
                CALCON 2022 - Kolkata, India CALCON is the flagship conference
                of the IEEE Kolkata Section.
              </p>
              <button className="event-btn">
                {" "}
                <Link className="link1" to="/event">
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="event-right">
          <div className="event-1">
            <img
              src="https://ewh.ieee.org/r10/calcutta/images/E-VEHICLE.jpg"
              alt=""
              className="event-img"
            />
            <div className="event-2">
              <h1 className="event-date">18 May 2022</h1>
              <h2 className="event-name">CALCON 2022</h2>
              <p className="event-des">
                CALCON is the flagship conference of the IEEE Kolkata Section.
              </p>
              <button className="event-btn">
                <Link className="link1" to="/event">
                  Read More
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Link className="link" to="/event">
        <button className="event-button">Rourkela Subsection's Events</button>
      </Link>

      <div className="message">
        <div className="message-left">
          <img
            src="https://ewh.ieee.org/r10/calcutta/images/chairkol.jpg"
            alt=""
            className="profile-pic"
          ></img>
          <div className="message-text">
            <h2 className="message-head">Chairperson's Message</h2>
            <p className="message-para">
              To the Members of the Kolkata Section : During the ongoing
              difficult times of the pandemic, first of all I convey my sincere
              thanks to all of you for having strived to take our section
              forward with your hard work and efforts.....
            </p>
            <button className="event-btn">
              <Link className="link1" to="/message/chairman">
                Read More
              </Link>
            </button>
          </div>
        </div>
        <div className="message-mid">
          <img
            src="https://ewh.ieee.org/r10/calcutta/images/seckol.jpg"
            alt=""
            className="profile-pic"
          ></img>
          <div className="message-text">
            <h2 className="message-head">Secretary's Message</h2>
            <p className="message-para">
              Dear members : It is my privilege to address you as the Secretary
              of one the large IEEE Sections in India. The years, 2020 and 2021
              have been very challenging years for IEEE Kolkata Section.....
            </p>
            <button className="event-btn">
              <Link className="link1" to="/message/secretary">
                Read More
              </Link>
            </button>
          </div>
        </div>
        <div className="message-right">
          <img
            src="https://ewh.ieee.org/r10/calcutta/images/pic/tnag.jpeg"
            alt=""
            className="profile-pic"
          ></img>
          <div className="message-text">
            <h2 className="message-head">Treasure's Message</h2>
            <p className="message-para">
              Dear members : Let me begin by wishing you all very happy,
              healthy, safe and successful days in the days ahead. We have
              indeed passed through a time of great difficulty and uncertainty.
            </p>
            <button className="event-btn">
              <Link className="link1" to="/message/treasure">
                Read More
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Scroll />
    </div>
  );
}
