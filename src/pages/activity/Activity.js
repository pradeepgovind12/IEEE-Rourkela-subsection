import React from 'react'
import { useState } from "react";
import "./activity.css";
export default function Activity() {
     const [toggleState, setToggleState] = useState(1);

     const toggleTab = (index) => {
       setToggleState(index);
     };
  return (
    <div className="activity-container">
      <div className="activity-1">
        <h1 className="activity-head">
          Student Activities & Student Branch Activities
        </h1>
        <hr className="line"></hr>
      </div>
      <div className="activity-2">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Student Activities
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Student Branch Activities
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="activity-student-container">
              <div className="activity-student-1">2018</div>
              <div className="activity-student-2">
                <h2 className="activity-student-head">
                  Plenary Lecture Session
                </h2>
                <div className="activity-student-des">
                  organized by IEEE Kolkata Section in collaboration with
                  Jadavpur University Research Scholars’ Association (J.U.R.S.A)
                </div>
                <p className="activity-student-para">
                  A plenary lecture session has been organized by IEEE Kolkata
                  Section in collaboration with Jadavpur University Research
                  Scholars’ Association (J.U.R.S.A) on 4th September, 2019, at
                  Gandhi Bhawan, Jadavpur University campus.
                </p>
                <a
                  className="activity-student-para society-email"
                  href="http://"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="activity-student-container">
              <div className="activity-student-1">2019</div>
              <div className="activity-student-2">
                <h2 className="activity-student-head">
                  Plenary Lecture Session
                </h2>
                <div className="activity-student-des">
                  organized by IEEE Kolkata Section in collaboration with
                  Jadavpur University Research Scholars’ Association (J.U.R.S.A)
                </div>
                <p className="activity-student-para">
                  A plenary lecture session has been organized by IEEE Kolkata
                  Section in collaboration with Jadavpur University Research
                  Scholars’ Association (J.U.R.S.A) on 4th September, 2019, at
                  Gandhi Bhawan, Jadavpur University campus.
                </p>
                <a
                  className="activity-student-para society-email"
                  href="http://"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <h2>Will be updated soon...</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
