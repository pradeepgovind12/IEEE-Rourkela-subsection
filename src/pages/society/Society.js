import "./society.css";
import React, { useState } from "react";
import Popup from "../../components/popup/Popup";
export default function Society() {
    const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="about-container society-container">
      <div>
        <h1 className="about-head">Society</h1>
        <hr className="line"></hr>
      </div>
      <div className="society-menu">
        <div className="society-menu-2">
          <img
            className="society-img"
            src="https://ewh.ieee.org/r10/calcutta/images/blank_pic.jpg"
            alt="profile-pic"
          ></img>
        </div>

        <div className="society-menu-1">
          <span className="society-head">
            AP-MTT Chapter [Chapter Code : AP03/MTT17]
          </span>
          <div className="society-sub-head">
            <div className="society-span">Chairperson: Koushik Dutta</div>
            <a className="society-email " href="mailto:someone@example.com">
              someone@example.com
            </a>
          </div>

          <a className="society-email chapter-website" href="http">
            Chapter website
          </a>

          <button
            onClick={() => {
              setModalOpen(true);
            }}
            className="society-btn"
          >
            About AP-MTT Chapter
          </button>
        </div>
      </div>
      {modalOpen && <Popup setOpenModal={setModalOpen} />}
    </div>
  );
}
