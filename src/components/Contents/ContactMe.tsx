import React from 'react';
import emailjs from 'emailjs-com';

const ContactMe = () => {
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm(
            'gamil_service',
            'default_template',
            e.currentTarget,
            'user_atCBwy0Gts43p6mI6bUmF'
        )
        .then((result) => {
            console.log( result.text);
        }, (error) => {
            console.log( error.text );
        });
    }

    return (
        <form className="contact_form" onSubmit={ sendEmail }>
            <div className="input-container">
                <label htmlFor="name-input" className="sr-only">이름</label>
                <input
                    type="text"
                    className="message-input-box"
                    placeholder="Name"
                    id="name-input"
                    name="user_name"
                />
                <label htmlFor="email-input" className="sr-only">이메일</label>
                <input
                    type="email"
                    className="message-input-box"
                    placeholder="Email"
                    id="email-input"
                    name="user_email"
                    required
                />
            </div>
            <label htmlFor="subject-input" className="sr-only">제목</label>
            <input
                type="text"
                className="message-input-box"
                placeholder="Subject"
                id="subject-input"
                name="subject"
            />
            <label htmlFor="message-input" className="sr-only">내용</label>
            <textarea
                className="message-input-box"
                placeholder="Message"
                id="message-input"
                name="message"
                rows={ 5 }
                required
            >
            </textarea>
            <div className="button-container">
                <button type="submit" className="fill-button">
                    Send
                </button>
            </div>
        </form>
    )
}

export default ContactMe;