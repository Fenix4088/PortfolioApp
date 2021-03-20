import React from 'react';
import emailjs from 'emailjs-com';

export function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_2wk4yc9', 'template_59m3bfi', e.target, 'user_LF091J7HzI7ijp7ACG5T1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
}