import React from 'react'
import "./mission.css";
export default function Mission() {
  return (
    <div className="mission-container">
      <div className="mission-1">
        <h1 className="mission-head">Mission/ Vision</h1>
        <hr className="line"></hr>
      </div>
      <div className="mission-2">
        <p>The main thrust areas for the IEEE Kolkata Section are:</p>
        <ul>
          <li>Advance global prosperity</li>
          <li>Fostering technological innovation</li>
          <li>Enabling members careers</li>
          <li>Promoting worldwide community</li>
        </ul>
        <p>
          IEEE Kolkata Section mission is to spread IEEE Activities to all
          remote corners by educational activities, human networking, and to
          develop technology and its applications for humanitarian challenges.
          Sections mission through WIE AG is to enlighten women and students
          about the innovations and to encourage them to choose engineering and
          science as carrier.
        </p>
        <p>IEEE's vision statement is:</p>
        <p>
          Be essential to the global technical community and to technical
          professionals everywhere, and be universally recognized for the
          contributions of technology and of technical professionals in
          improving global conditions.
        </p>
      </div>
    </div>
  );
}
