import React from 'react'
import "./pride.css";
import { Link } from "react-router-dom";
export default function Pride() {
  return (
    <div className="pride-container">
      <div className="pride-1">
        <h1 className="pride-head">Section's Pride</h1>
        <hr className="line"></hr>
      </div>
      <div className="pride-2">
        <div className="pride-div">
          <Link to="/pride/awards" className="link1">
            Awards and Accolades
          </Link>
        </div>
        <div className="pride-div">Report on IEEE Milestone</div>
        <div className="pride-div">ISIJU</div>
        <div className="pride-div">IEEE Fellowship</div>
        <div className="pride-div">Major past events</div>
      </div>
    </div>
  );
}
