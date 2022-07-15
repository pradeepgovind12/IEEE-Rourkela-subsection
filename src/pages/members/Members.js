import React from 'react'
import "./members.css";
import Scroll from "../../components/scroll/Scroll";
export default function Members() {
  return (
    <div className="members-container">
      <div className="members-1">
        <h1 className="members-head">
          Executive Committee Members List - 2022
        </h1>
        <hr className="line"></hr>
      </div>
      <h2 className="members-head">Office Bearers</h2>
      <div className="members-2">
        <div className="members-menu">
          <div className="members-menu-1">
            <img
              className="members-img"
              src="https://nitrkl.ac.in//docs/Faculty/Photo/185471.jpg"
              alt=""
            />
            <span className="members-des">Chair</span>
            <span className="members-name">Kamalkanta Mahapatra</span>
            <div className="members-email">
              {" "}
              <i class="fa-solid fa-phone email-icon"></i>(+91) 661 246 2713
            </div>
            <button className="members-btn">
              {" "}
              <a href="http://www.nitrkl.ac.in/EC/~kkm" className="link">
                View Profile
              </a>
            </button>
          </div>
        </div>
        <div className="members-menu">
          <div className="members-menu-1">
            <img
              className="members-img"
              src="https://nitrkl.ac.in//docs/Faculty/Photo/190572.jpg"
              alt=""
            />
            <span className="members-des">Chair-Elect</span>
            <span className="members-name">Dipti Patra</span>
            <div className="members-email">
              <i class="fa-solid fa-phone email-icon"></i>
              (+91) 661 246 2410
            </div>
            <button className="members-btn">
              <a
                href="https://website.nitrkl.ac.in/FProfile.aspx?e=dpatra"
                className="link"
              >
                View Profile
              </a>
            </button>
          </div>
        </div>
        <div className="members-menu">
          <div className="members-menu-1">
            <img
              className="members-img"
              src="https://nitrkl.ac.in//docs/Faculty/Photo/1080902.jpg"
              alt=""
            />
            <span className="members-des">Vice-Chair</span>
            <span className="members-name"> Snehashis Chakraverty</span>
            <div className="members-email">
              <i class="fa-solid fa-phone email-icon"></i>(+91) 661 246 2713
            </div>
            <button className="members-btn">
              <a
                href="https://website.nitrkl.ac.in/FProfile.aspx?e=chakravertys"
                className="link"
              >
                View Profile
              </a>
            </button>
          </div>
        </div>
        <div className="members-menu">
          <div className="members-menu-1">
            <img
              className="members-img"
              src="https://nitrkl.ac.in//docs/Faculty/Photo/1910596.jpg"
              alt=""
            />
            <span className="members-des">Vice-Chair 2</span>
            <span className="members-name"> Poonam Singh</span>
            <div className="members-email">
              <i class="fa-solid fa-phone email-icon"></i>(+91) 661 246 2460
            </div>
            <button className="members-btn">
              <a
                href="https://website.nitrkl.ac.in/FProfile.aspx?e=psingh"
                className="link"
              >
                View Profile
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="members-2">
        <div className="members-menu">
          <div className="members-menu-1">
            <img
              className="members-img"
              src="https://nitrkl.ac.in//docs/Faculty/Photo/1201371.jpg"
              alt=""
            />
            <span className="members-des">Secretary</span>
            <span className="members-name"> Sanjeev Patel</span>
            <div className="members-email">
              <i class="fa-solid fa-phone email-icon"></i>(+91) 000 000 0000
            </div>
            <button className="members-btn">
              <a
                href="https://website.nitrkl.ac.in/FProfile.aspx?e=patels"
                className="link"
              >
                View Profile
              </a>
            </button>
          </div>
        </div>
        <div className="members-menu">
          <div className="members-menu-1">
            <img
              className="members-img"
              src="https://nitrkl.ac.in//docs/Faculty/Photo/1201396.jpg"
              alt=""
            />
            <span className="members-des">Joint Secretary</span>
            <span className="members-name">Earu Banoth</span>
            <div className="members-email">
              <i class="fa-solid fa-phone email-icon"></i>(+91) 000 000 0000
            </div>
          </div>
          <button className="members-btn">
            <a
              href="https://website.nitrkl.ac.in/FProfile.aspx?e=banothe"
              className="link"
            >
              View Profile
            </a>
          </button>
        </div>
        <div className="members-menu">
          <div className="members-menu-1">
            <img
              className="members-img"
              src="https://nitrkl.ac.in//docs/Faculty/Photo/1110949.jpg"
              alt=""
            />
            <span className="members-des">Treasurer</span>
            <span className="members-name"> Ayas Kanta Swain</span>
            <div className="members-email">
              <i class="fa-solid fa-phone email-icon"></i> (+91) 661 246 2458
            </div>
            <button className="members-btn">
              <a
                href="https://website.nitrkl.ac.in/FProfile.aspx?e=swaina"
                className="link"
              >
                View Profile
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="members-3">
        <h1 className="members-head">Members</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Portfolio</th>
            <th>Email Id</th>
          </tr>
          <tr>
            <td>Sambit Bakshi</td>
            <td>Member</td>
            <td>
              <a class="society-email" href="mailto:example@gmail.com">
                example@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Bhaskar Gupta</td>
            <td>Member</td>
            <td>
              <a class="society-email" href="mailto:example@gmail.com">
                example@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Bhaskar Gupta</td>
            <td>Member</td>
            <td>
              <a class="society-email" href="mailto:example@gmail.com">
                example@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Bhaskar Gupta</td>
            <td>Member</td>
            <td>
              <a class="society-email" href="mailto:example@gmail.com">
                example@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Bhaskar Gupta</td>
            <td>Member</td>
            <td>
              <a class="society-email" href="mailto:example@gmail.com">
                example@gmail.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Bhaskar Gupta</td>
            <td>Member</td>
            <td>
              <a class="society-email" href="mailto:example@gmail.com">
                example@gmail.com
              </a>
            </td>
          </tr>
        </table>
      </div>
     
      <Scroll />
    </div>
  );
};
