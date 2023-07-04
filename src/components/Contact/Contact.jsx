import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          <div className="c-left">left</div>
          <div className="c-right">
            <div className="image-container">
              <img src="./contact.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;