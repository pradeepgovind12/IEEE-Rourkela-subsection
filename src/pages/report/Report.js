import React from 'react'
import "./report.css";
import { useState } from "react";
export default function Report() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
    <div className="report-container">
      <div className="report-1">
        <h1 className="report-head">Section Reports</h1>
        <hr className="line"></hr>
      </div>
      <div className="report-2">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Annual General Meeting(AGM)
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Annual Report
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            General Report
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Financial Report
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <span className="slate-span">AGM Notice</span>
            <ul>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
            </ul>
            <span className="slate-span">AGM Minute</span>
            <ul>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
            </ul>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <span className="slate-span">Annual Reports</span>
            <ul>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
            </ul>
          </div>

          <div
            className={
              toggleState === 3 ? "content  active-content" : "content"
            }
          >
            <div className="general-container">
              <div className="general-head">IEEE Sections Congress </div>
              <div className="general-title">
                Held at : San Francisco, California, US
              </div>
              <div className="general-name">
                Report Submitted by : Prof. Sivaji Chakravorti, Chairman, IEEE
                Calcutta Section
              </div>
              <div className="general-details">
                <a className="society-email" href="http://www.">
                  Detailed Reports
                </a>
              </div>
            </div>
            <div className="general-container">
              <div className="general-head">IEEE Sections Congress </div>
              <div className="general-title">
                Held at : San Francisco, California, US
              </div>
              <div className="general-name">
                Report Submitted by : Prof. Sivaji Chakravorti, Chairman, IEEE
                Calcutta Section
              </div>
              <div className="general-details">
                <a className="society-email" href="http://www.">
                  Detailed Reports
                </a>
              </div>
            </div>
            <div className="general-container">
              <div className="general-head">IEEE Sections Congress </div>
              <div className="general-title">
                Held at : San Francisco, California, US
              </div>
              <div className="general-name">
                Report Submitted by : Prof. Sivaji Chakravorti, Chairman, IEEE
                Calcutta Section
              </div>
              <div className="general-details">
                <a className="society-email" href="http://www.">
                  Detailed Reports
                </a>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 4 ? "content  active-content" : "content"
            }
          >
            <span className="slate-span">Financial Report</span>
            <ul>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
              <li>
                <a href="http" className="society-email">
                  Annual General Meeting - 2021
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
