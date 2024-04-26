import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactMe = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_ftfxakc", "template_y48pl9f", form.current, {
        publicKey: "kPkBvFmCxL6NpXt0r",
      })
      .then(
        () => {
          setLoading(false);
          console.log("SUCCESS!");
          setSubmitted(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  function ifSubmitted() {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    return <h2>Message delivered - Reloading...</h2>;
  }

  return (
    <section className="contact-me">
      <a className="anchor"></a>
      <div className="contactMe-cont">
        <div className="contactMe-wrapper">
          <h1>Contact me</h1>

          <form className="form-cont" ref={form} onSubmit={sendEmail}>
            <div className="form-elms">
              <label style={{ fontSize: "25px" }}>Name</label>
              <input type="text" name="to_name" />
            </div>

            <div className="form-elms">
              <label style={{ fontSize: "25px" }}>Email</label>
              <input type="email" name="from_name" required />
            </div>

            <div className="message-box">
              <label style={{ fontSize: "25px" }}>Message</label>
              <textarea name="message" />
            </div>
            <input type="submit" value="Send" />
            {loading && <h2>Loading</h2>}
            {submitted && ifSubmitted()}
          </form>
        </div>
        <footer className="end-footer">
          Site developed by Saroj using React
        </footer>
      </div>
    </section>
  );
};
