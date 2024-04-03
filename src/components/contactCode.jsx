import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactFunc = () => {
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

  if (loading) {
    return <div>Loading</div>;
  }

  if (submitted) {
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    return <div>Message delivered Reloading...</div>;
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="from_name" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
