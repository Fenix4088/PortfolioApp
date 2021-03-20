import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Preloader } from "../Preloader/Preloader";

export function ContactUs() {
    console.log("ContactUs")
  const [isSending, setIsSending] = useState(false);

    console.log(inputOnFocus)
  function sendEmail(e) {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_2wk4yc9",
        "template_59m3bfi",
        e.target,
        "user_LF091J7HzI7ijp7ACG5T1"
      )
      .then(
        (result) => {
          setIsSending(false);
          console.log(result.text);
        },
        (error) => {
          setIsSending(false);
          console.log(error.text);
        }
      );
  }

  const onFocusHandler = (e) => {
      const {name} = e.currentTarget;
  }

  return (
    <form className="contacts__form" onSubmit={sendEmail}>
      {isSending && <Preloader />}
      {isSending && <div className={"form-overlay"}></div>}
      <input type="hidden" name="contact_number" />
      <div className="contacts__form-inputs-wrapper">
        <div className="contacts__form-item">
          <input
            disabled={isSending}
            onFocus={onFocusHandler}
            type="text"
            name="user_name"
            className="contacts__form-input"
            required
          />
          <span className="contacts__form-placeholder">Name</span>
        </div>

        <div className="contacts__form-item">
          <input
            disabled={isSending}
            onFocus={onFocusHandler}
            type="email"
            name="user_email"
            className="contacts__form-input"
            required
          />
          <span className="contacts__form-placeholder">Your email</span>
        </div>

        <div className="contacts__form-item">
          <textarea
            disabled={isSending}
            onFocus={onFocusHandler}
            className="contacts__form-input contacts__form-input--textarea"
            name="message"
          />
          <span className="contacts__form-placeholder">Message</span>
        </div>
      </div>

      <button
        disabled={isSending}
        type="submit"
        className="contacts__form-btn"
        value="Send"
      >
        Send
      </button>
    </form>
  );
}
