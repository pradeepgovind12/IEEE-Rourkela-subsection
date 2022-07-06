import React from 'react'

export default function Treasure() {
  return (
    <div className="chairman-container">
      <h1 className="chairman-msg">Treasure's Message</h1>
      <hr className="line"></hr>
      <div className="chairman-container-1">
        <img
          src="https://ewh.ieee.org/r10/calcutta/images/pic/tnag.jpeg"
          alt="placeholder"
          className="chairman-img"
        />
      </div>
      <div className="chairman-container-2">
        <h3 className="chairman-to">
          To the Members of the Rourkela SubSection :
        </h3>
        <p className="chairman-para">
          During the ongoing difficult times of the pandemic, first of all I
          convey my sincere thanks to all of you for having strived to take our
          section forward with your hard work and efforts. Although we miss the
          various activities of the past years, there have been several online
          events organized very successfully by the different chapters and
          affinity groups under the umbrella of our section. Several laurels
          have been won by our members in various domains.
        </p>
        <p className="chairman-para">
          These days have been particularly hard for all of us. Our lives have
          turned upside down in all practicality. Many of you may have suffered
          distress, either yourselves or in your families, and have strived to
          overcome all such with your immense grit, courage and hardship.
        </p>
        <p className="chairman-para">
          But we are privileged to be hosting the IEEE IC flagship conference
          INDICON 2021, December 19-21 this year, at IIT Guwahati. The
          conference is expected to be hybrid in mode. I welcome your
          participation in large numbers. The upcoming IEEE milestone program at
          theCalcutta Electric Supply Corporation is also scheduled for December
          18, 2021 at the CESC premises. Please do join us.
        </p>
        <p className="chairman-para">
          Given the positive efforts undertaken by all, we look forward to
          better times very soon. We hope the membership drive along with other
          activities will get even stronger. We expect to revive face-to-face
          meetings and social exchanges at the earliest.
        </p>
        <p className="chairman-para">
          Until then, please stay safe, take care, and follow the norms.
        </p>
      </div>
      <div className="chairman-container-3">
        <span className="chairman-span">Susanta Ray</span>
        <span>September 16, 2021</span>
      </div>
      <div className="chairman-container-4">
        <button className="chairman-btn">
          {" "}
          <a href="http://localhost:3000/message/chairman" className="link">
            Chairperson's Message'
          </a>
        </button>
        <button className="chairman-btn">
          {" "}
          <a href="http://localhost:3000/message/secretary" className="link">
            Secretary's Message'
          </a>
        </button>
      </div>
    </div>
  );
}
