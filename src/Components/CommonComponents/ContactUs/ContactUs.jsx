import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Preloader } from "../Preloader/Preloader";

export function ContactUs() {
  const [isSending, setIsSending] = useState(false);

    const [nameInpVal, setNameInputValue] = useState("");
    const [emailInpVal, setEmailInpVal] = useState("");
    const [messageInpVal, setMessageInpVal] = useState("");

    const nameInpChange = (curVal) => setNameInputValue(curVal);
    const emailInpChange = (curVal) => setEmailInpVal(curVal);
    const messageInpChange = (curVal) => setMessageInpVal(curVal);

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
            nameInpChange("")
            emailInpChange("")
            messageInpChange("")
          console.log(result.text);
        },
        (error) => {
          setIsSending(false);

          console.log(error.text);
        }
      );
  }

  const formInputData = [
    { inputType: "input", name: "user_name", placeholder: "Name", value: nameInpVal, onInputChange:  nameInpChange},
    { inputType: "input", name: "user_email", placeholder: "Your email", value: emailInpVal, onInputChange: emailInpChange },
    { inputType: "textarea", name: "message", placeholder: "Message", value: messageInpVal, onInputChange:  messageInpChange},
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
            value={item.value}
            onInputChange={item.onInputChange}
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

export const FormInput = ({ inputType, disabled, placeholder, name, value, onInputChange }) => {
  const [isActive, setIsActive] = useState(false);


  const activePlaceholderStyles = {
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
  const onChangeHandler = (e) => onInputChange(e.currentTarget.value);

  return (
    <div className="contacts__form-item">
      {inputType === "input" ? (
        <input
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          disabled={disabled}
          value={value}
          type="text"
          name={name}
          className="contacts__form-input"
          required
        />
      ) : (
        <textarea
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          value={value}
          disabled={disabled}
          className="contacts__form-input contacts__form-input--textarea"
          name={name}
        />
      )}

      <span
        className="contacts__form-placeholder"
        style={isActive ? activePlaceholderStyles : {}}
      >
        {placeholder}
      </span>
    </div>
  );
};
