import React from 'react'
import "./popup.css";
export default function Popup({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="X-btn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <h1 className="popup-head">
          About IEEE Antennas and Propagation Society (APS)
        </h1>
        <a className="society-email chapter-1" href="http://">
          Chapter website
        </a>
        <p className="popup-para">
          The field of interest of the Society includes the following: antennas,
          including analysis, design, development, measurement, and testing;
          radiation, propagation, and the interaction of electromagnetic waves
          with discrete and continuous media; and applications and systems
          pertinent to antennas, propagation, and sensing, such as applied
          optics, millimeter- and sub-millimeter-wave techniques, antenna signal
          processing and control, radio astronomy, and propagation and radiation
          aspects of terrestrial and space-based communication, including
          wireless, mobile, satellite, and telecommunications.
        </p>
        <a className="society-email" href="http://">
          <span>Learn more about IEEE APS</span>
        </a>

        <h3 className="popup-head">
          About IEEE IEEE Microwave Theory and Techniques Society (MTT-S)
        </h3>
        <p className="popup-para">
          MTT-S is a transnational society with more than 11,000 members and 150
          chapters worldwide. Our Society promotes the advancement of microwave
          theory and its applications, including RF, microwave, millimeter-wave,
          and terahertz technologies.
        </p>
        <p className="popup-para">
          For more than 60 years the MTT-S has worked to advance the
          professional standing of its members and enhance the quality of life
          for all people through the development and application of microwave
          technology. As we enter into an exciting future, our mission is to
          continue to understand and influence microwave technology, and to
          provide a forum for all microwave engineers. The MTT-S will continue
          to be the global focus for promotion of the RF and microwave
          engineering profession, by advancing and distributing knowledge and
          supporting professional development. This is an all- volunteer
          society, driven to excellence by its leadership, with the active
          participation of all its world-wide members. The activities sponsored
          by the MTT-S include a broad spectrum of conferences, workshops,
          tutorials, technical committees, chapter meetings, publications and
          professional education programs. Our principal publications and
          conferences are world class, peer reviewed and recognized as top of
          class. Our professional venues provide a great opportunity for
          networking with experienced innovators, experts, and practitioners.
          Our volunteer programs provide for development of critical,
          non-technical skills that enable you to be more effective
          professionally.
        </p>
        <a className="society-email" href="http://">
          <span>Learn more about IEEE APS</span>
        </a>
        <div className="popup-close-1">
          <button
            className="popup-close"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}
