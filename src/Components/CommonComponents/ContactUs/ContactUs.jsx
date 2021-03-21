import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Preloader } from "../Preloader/Preloader";

export function ContactUs() {
  const [isSending, setIsSending] = useState(false);

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

  const formInputData = [
    { inputType: "input", name: "user_name", placeholder: "Name" },
    { inputType: "input", name: "user_email", placeholder: "Your email" },
    { inputType: "textarea", name: "message", placeholder: "Message" },
  ];

  return (
    <form className="contacts__form" onSubmit={sendEmail}>
      {isSending && <Preloader />}
      {isSending && <div className={"form-overlay"}></div>}
      <input type="hidden" name="contact_number" />
      <div className="contacts__form-inputs-wrapper">
        {formInputData.map((item, i) => (
          <FormInput
            key={i}
            name={item.name}
            inputType={item.inputType}
            disabled={isSending}
            placeholder={item.placeholder}
          />
        ))}
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

export const FormInput = ({ inputType, disabled, placeholder, name }) => {
  const [isActive, setIsActive] = useState(false);

  const test = {
    fontSize: "16px",
    color: "rgb(237, 150, 38)",
    top: "-20px",
  };

  const onFocusHandler = (e) => {
    setIsActive(true);
  };

  const onBlurHandler = (e) => {
    const { value } = e.currentTarget;

    if (value.trim()) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="contacts__form-item">
      {inputType === "input" ? (
        <input
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          disabled={disabled}
          type="text"
          name={name}
          className="contacts__form-input"
          required
        />
      ) : (
        <textarea
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          disabled={disabled}
          className="contacts__form-input contacts__form-input--textarea"
          name={name}
        />
      )}

      <span className="contacts__form-placeholder" style={isActive ? test : {}}>
        {placeholder}
      </span>
    </div>
  );
};
