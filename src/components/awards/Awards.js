import React from 'react'
import "./awards.css";
import { Link } from "react-router-dom";
function Awards() {
  return (
    <div className="awards-container">
      <div className="awards-1">
        <h1 className="awards-head">Accomplishment</h1>
        <hr className="line"></hr>
      </div>
      <div className="awards-2">
        <button className="pride-btn">
          <Link to="/pride" className="link3">
            Section's Pride
          </Link>
        </button>
      </div>
      <div className="awards-3">
        <h1>Will be updated soon...</h1>
      </div>
    </div>
  );
}

export default Awards