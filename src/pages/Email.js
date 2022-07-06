import React from 'react'
import { useRef} from "react";
import emailjs from "emailjs-com";
import "./email.css";
export default function Email() {
    const formRef = useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_3s38xyd",
          "template_okvy79f",
          formRef.current,
          "fb6dTwvwfpt7VPsfn"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  return (
    <>
      <div className="email-content">
        <h1 className="email-head">Contact us</h1>
      </div>
      <div className="email-container">
        <div className="email-left">
          <form className="form" ref={formRef} onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              className="input"
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              className="input"
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              className="textarea"
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button className="button">Submit</button>
          </form>
        </div>

        <div className="email-right">
          <div className="email-right-1">
            <div className="email-right-12">
              <img
                className="email-right-img"
                src="https://ewh.ieee.org/r10/calcutta/images/chairkol.jpg"
                alt=""
              />
              <h2 className="email-right-1-head">Chairperson</h2>
              <div>
                <span className="span-email">Sushmita Mitra</span>

                <a className="email-link" href="mailto:webmaster@example.com">
                  <span className="span">webmaster@example.com</span>
                </a>
              </div>
            </div>
          </div>
          <div className="email-right-1">
            <div className="email-right-12">
              <img
                className="email-right-img"
                src="https://ewh.ieee.org/r10/calcutta/images/seckol.jpg"
                alt=""
              />
              <h2 className="email-right-1-head">Secretary</h2>
              <div>
                <span className="span-email">Susanta Ray</span>

                <a className="email-link" href="mailto:webmaster@example.com">
                  <span className="span">webmaster@example.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
