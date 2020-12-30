import React from 'react';

const ContactMe = () => {
    return (
        <form action="#" method="POST">
            <div className="input-container">
                <input
                    type="text"
                    className="message-input-box"
                    placeholder="Name"
                />
                <input
                    type="email"
                    className="message-input-box"
                    placeholder="Email"
                />
            </div>
            <input
                type="text"
                className="message-input-box"
                placeholder="Subject"
            />
            <textarea
                className="message-input-box"
                placeholder="Message"
                rows={ 5 }
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