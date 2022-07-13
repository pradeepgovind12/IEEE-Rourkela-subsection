import React from 'react'
import { useState } from "react";
import "./slate.css";
import Scroll from "../../components/scroll/Scroll";
export default function Slate() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

  return (
    <div className="slate-container">
      <div className="slate-1">
        <div>
          <h1 className="slate-head">SLATE</h1>
          <hr className="line"></hr>
        </div>
      </div>
      <div className="slate-2">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            SLATE 2022
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            SLATE 2021
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <span className="slate-span">SLATE 2022</span>
            <span className="slate-span">Office Bearers:</span>
            <ul>
              <li>Chair : Sushmita Mitra</li>
              <li>Chair-Elect : Iti Saha Misra</li>
              <li>Chair : Sushmita Mitra</li>
              <li>Chair-Elect : Iti Saha Misra</li>
              <li>Chair : Sushmita Mitra</li>
              <li>Chair-Elect : Iti Saha Misra</li>
            </ul>
            <span className="slate-span">Members:</span>
            <ol>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
            </ol>
            <span className="slate-span">Nomination Committee:</span>
            <span className="slate-span">
              Nomination Committee of SLATE 2022:
            </span>
            <ol>
              <li>
                Prof. Salil Kumar Sanyal, Chairman
                <a
                  class="society-email chapter-website"
                  href="mailto:example@gmail.com"
                >
                  example@gmail.com
                </a>
              </li>
              <li>
                Prof. Salil Kumar Sanyal, Chairman
                <a
                  class="society-email chapter-website"
                  href="mailto:example@gmail.com"
                >
                  example@gmail.com
                </a>
              </li>
              <li>
                Prof. Salil Kumar Sanyal, Chairman
                <a
                  class="society-email chapter-website"
                  href="mailto:example@gmail.com"
                >
                  example@gmail.com
                </a>
              </li>
            </ol>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <span className="slate-span">SLATE 2021</span>
            <span className="slate-span">Office Bearers:</span>
            <ul>
              <li>Chair : Sushmita Mitra</li>
              <li>Chair-Elect : Iti Saha Misra</li>
              <li>Chair : Sushmita Mitra</li>
              <li>Chair-Elect : Iti Saha Misra</li>
              <li>Chair : Sushmita Mitra</li>
              <li>Chair-Elect : Iti Saha Misra</li>
            </ul>
            <span className="slate-span">Members:</span>
            <ol>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
              <li>Bhaskar guptta</li>
              <li>Sovani dalai</li>
            </ol>
            <span className="slate-span">Nomination Committee:</span>
            <span className="slate-span">
              Nomination Committee of SLATE 2021:
            </span>
            <ol>
              <li>
                Prof. Salil Kumar Sanyal, Chairman
                <a class="society-email" href="mailto:example@gmail.com">
                  example@gmail.com
                </a>
              </li>
              <li>
                Prof. Salil Kumar Sanyal, Chairman
                <a class="society-email" href="mailto:example@gmail.com">
                  example@gmail.com
                </a>
              </li>
              <li>
                Prof. Salil Kumar Sanyal, Chairman
                <a class="society-email" href="mailto:example@gmail.com">
                  example@gmail.com
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Scroll />
    </div>
  );
}
