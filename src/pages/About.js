import "./about.css";

export default function About() {
  return (
    <div className="about-container">
      <div>
        <h1 className="about-head">About Us</h1>
        <hr className="line"></hr>
      </div>
      <div className="about-ieee">
        <h3 className="about-head">About IEEE</h3>
        <p about-ieee-para>
          IEEE is the world's largest technical professional organization
          dedicated to advancing technology for the benefit of humanity. IEEE
          and its members inspire a global community through its highly cited
          publications, conferences, technology standards, and professional and
          educational activities.
        </p>
        <h3 className="about-head">About IEEE Rourkela Subsection</h3>
        <p className="about-ieee-para">
          Way back in 1971 mebers of IEEE over the entire Eastern and North
          Eastern region of India got together to form the Eastern Regional
          Sub-Section of IEEE, in India. Mr. Alak Ghose was the founder Chairman
          of this Sub-Section. After the formation of the India Council, the
          Eastern Regional Sub-Section was given the name of Calcutta
          Sub-Section, under the Delhi Section of IEEE, India. Through the
          pioneering efforts of Mr. K.B. Subramaniam who took over form Mr. Alak
          Ghose in 1974 as Chairman, along with Mr. Kalyan K Dasgupta, the
          Calcutta Sub-Section was raised to the status of a full section on
          September 28, 1978.
        </p>
        <p className="about-ieee-para">
          In 1983 a Sub-Section was formed at the Indian Institute of
          Technology, Kharagpur under IEEE Calcutta Section and on May 13, 1985
          the Kharagpur Sub-Section was upgraded to a Section, containing the
          Midnapur district of West Bengal within the geographical domain of
          IEEE Calcutta Section.
        </p>
        <p className="about-ieee-para">
          Over the years, the activities of IEEE Calcutta Section increased
          manifold and spread through many cities and state capitals under the
          Section. Several Technical Society Chapters and many student branches
          have been formed. Currently the Section has eleven chapters and two
          affinity groups. There are more than fifteen student branches now and
          this figure is continually on the rise. The Section maintains a
          healthy student to member ratio and works closely and coherently with
          its chapters and affinity groups not only in technical, education and
          membership development activities but also in outreach activities
          which a major focus of the section.
        </p>
      </div>
    </div>
  );
}
