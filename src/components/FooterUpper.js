import React from 'react';
import "./footerUpper.css";
function FooterUpper() {
  return (
    <div className="footer">
      <div className="footer-upper">
        <div className="footer-part">
          Know IEEE
          <ol>
            <li className="list-items"> IEEE Home</li>
            <li className="list-items"> IEEE Region 10</li>
            <li className="list-items"> Join IEEE/Society</li>
            <li className="list-items"> my IEEE</li>
            <li className="list-items"> Shope IEEE</li>
            <li className="list-items"> More IEEE Sites</li>
            <li className="list-items"> IEEE India Council</li>
            <li className="list-items"> Contact IEEE</li>
          </ol>
        </div>
        <div className="footer-part">
          web & Regulations
          <ol>
            <li className="list-items"> Entity Web Home</li>
            <li className="list-items"> Privacy & Security</li>
            <li className="list-items"> Terms & Conditions</li>
            <li className="list-items"> Non-discrimination Policy</li>
          </ol>
        </div>
        <div className="footer-part">
          Member's Corner
          <ol>
            <li className="list-items"> IEEE Explore</li>
            <li className="list-items"> IEEE Spectrum</li>
            <li className="list-items"> The Institute</li>
            <li className="list-items"> Proceedings of the IEEE</li>
            <li className="list-items"> IEEE Potentials</li>
            <li className="list-items"> IEEE TV</li>
            <li className="list-items">
              {" "}
              Graphic unit Formation Petition Process
            </li>
            <li className="list-items"> List of IEEE Members</li>
          </ol>
        </div>
        <div className="footer-part">
          Resources For
          <ol>
            <li className="list-items"> Authors and speakers</li>
            <li className="list-items"> Conference organizers</li>
            <li className="list-items"> Employees and jobseekers</li>
            <li className="list-items"> Librarians and Institutions</li>
            <li className="list-items"> Media and Journalists</li>
            <li className="list-items"> Students</li>
            <li className="list-items"> Volunteers</li>
          </ol>
        </div>
        <div className="footer-part">
          Officer's Tool
          <ol>
            <li className="list-items"> Access SAMIEEE</li>
            <li className="list-items"> Tutorials on SAMIEEE</li>
            <li className="list-items"> Tutorials on VTools</li>
          </ol>
        </div>
      </div>
      <h2 className="text"> Updated on 27 May 2022</h2>
    </div>
  );
}

export default FooterUpper