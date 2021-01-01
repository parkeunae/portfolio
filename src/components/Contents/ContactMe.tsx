import React, { useState, useRef, useCallback } from 'react';
import emailjs from 'emailjs-com';
import classNames from 'classnames';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SEND_EMAIL_FORM = {
    NAME: 'user_name',
    EMAIL: 'user_email',
    SUBJECT: 'subject',
    MESSAGE: 'message'
};

const INVALID_MESSAGE_ID = {
    EMAIL: 'invalid-email-message',
    MESSAGE: 'invalid-message-message'
};

const NOTIFICATION_MESSAGE = {
    SUCCESS: '메일 전송을 완료하였습니다.',
    FAIL: '메일 전송을 실패하였습니다.'
}

const EMAIL_REGEX = /^([a-zA-Z0-9]+[-_.]?[a-zA-Z0-9]*?)@([a-zA-Z0-9]+[-_.]?[a-zA-Z0-9]*)[^.][.]([a-zA-Z]{2,3})$/;
const MESSAGE_REGEX = /.*\S.*/;

const CloseToastButton = () => (
    <div className="Toastify__close-button">
        <FontAwesomeIcon icon="times" aria-label="닫기" title="닫기" />
    </div>
);

const ContactMe = () => {
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidMessage, setIsValidMessage] = useState(false);

    const contactFormRef = useRef<HTMLFormElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const messageAreaRef = useRef<HTMLTextAreaElement>(null);

    const toggleInvalidMessage = ({ isValid, invalidMessageId }: { isValid:boolean, invalidMessageId: string }) => {
        const invalidMessage = document.getElementById(invalidMessageId);
        if (invalidMessage) {
            if (isValid) {
                invalidMessage.style.display = 'none';
            } else {
                invalidMessage.style.display = 'block';
            }
        }
    }

    const changeValidStatus = ({ type, value, regex, invalidMessageId }
        : { type: string, value: string, regex: RegExp, invalidMessageId: string }) => {
        const isValid = regex.test(value);
        if (type === SEND_EMAIL_FORM.EMAIL) {
            setIsValidEmail(isValid);
        } else if (type === SEND_EMAIL_FORM.MESSAGE) {
            setIsValidMessage(isValid);
        }

        toggleInvalidMessage({ isValid, invalidMessageId });
    }

    const checkValidInputValue = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;

        if (name === SEND_EMAIL_FORM.EMAIL) {
            changeValidStatus({ type: name, value, regex: EMAIL_REGEX, invalidMessageId: INVALID_MESSAGE_ID.EMAIL });
            return;
        }

        if (name === SEND_EMAIL_FORM.MESSAGE) {
            changeValidStatus({ type: name, value, regex: MESSAGE_REGEX, invalidMessageId: INVALID_MESSAGE_ID.MESSAGE });
        }
    }

    const resetContactForm = useCallback(() => {
        contactFormRef.current?.reset();
        setIsValidEmail(false);
        setIsValidMessage(false);
    }, [contactFormRef])

    const sendEmail = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!isValidEmail) {
            toggleInvalidMessage({ isValid: isValidEmail, invalidMessageId: INVALID_MESSAGE_ID.EMAIL });
            emailInputRef.current?.focus();
            return;
        }

        if (!isValidMessage) {
            toggleInvalidMessage({ isValid: isValidMessage, invalidMessageId: INVALID_MESSAGE_ID.MESSAGE });
            messageAreaRef.current?.focus();
            return;
        }

        emailjs.sendForm(
            'gamil_service',
            'default_template',
            e.currentTarget,
            'user_atCBwy0Gts43p6mI6bUmF'
        )
        .then((result) => {
            console.log( result.text);
            resetContactForm();
            toast.success(NOTIFICATION_MESSAGE.SUCCESS, {
                position: toast.POSITION.TOP_CENTER
            });
        }, (error) => {
            console.log( error.text );
            toast.error(NOTIFICATION_MESSAGE.FAIL, {
                position: toast.POSITION.TOP_CENTER
            });
        });
    }, [isValidEmail, isValidMessage, emailInputRef, messageAreaRef, contactFormRef])

    return (
        <div>
            <p className="form-info-message">
                * 표시는 필수 입력 값입니다. 이메일과 메시지 내용은 꼭 적어주세요!
            </p>

            <form className="contact_form" onSubmit={ sendEmail } ref={ contactFormRef }>
                <div className={ classNames('form-row', 'input-container')}>
                    <div>
                        <label htmlFor="name-input" className="sr-only">이름</label>
                        <input
                            type="text"
                            className="message-input-box"
                            placeholder="Name"
                            id="name-input"
                            name={ SEND_EMAIL_FORM.NAME }
                        />
                    </div>
                    <div>
                        <label htmlFor="email-input" className="sr-only">이메일*</label>
                        <input
                            ref={ emailInputRef }
                            type="email"
                            className="message-input-box"
                            placeholder="Email*"
                            id="email-input"
                            name={ SEND_EMAIL_FORM.EMAIL }
                            onBlur={ checkValidInputValue }
                        />
                        <p className="invalid-message" id={ INVALID_MESSAGE_ID.EMAIL }>
                            올바르지 않은 이메일 형식입니다. 다시 입력해주세요.
                        </p>
                    </div>
                </div>
                <div className="form-row">
                    <label htmlFor="subject-input" className="sr-only">제목</label>
                    <input
                        type="text"
                        className="message-input-box"
                        placeholder="Subject"
                        id="subject-input"
                        name={ SEND_EMAIL_FORM.SUBJECT }
                    />
                </div>
                <div className="form-row">
                    <label htmlFor="message-input" className="sr-only">메시지 내용*</label>
                    <textarea
                        ref={ messageAreaRef }
                        className="message-input-box"
                        placeholder="Message*"
                        id="message-input"
                        name={ SEND_EMAIL_FORM.MESSAGE }
                        rows={ 5 }
                        onBlur={ checkValidInputValue }
                    >
                    </textarea>
                    <p className="invalid-message" id={ INVALID_MESSAGE_ID.MESSAGE }>
                        메시지를 작성해주세요.
                    </p>
                </div>
                <div className="button-container">
                    <button type="submit" className="fill-button">
                        Send
                    </button>
                </div>
            </form>
            <ToastContainer
                hideProgressBar
                closeButton={ CloseToastButton }
                autoClose={ 1800 }
            />
        </div>
    )
}

export default ContactMe;

/**
 * TODO:
 *  1. 메시지 길이 어떻게 하지... 50kb 계산해서 최대 글자 개수 확인
 *  2. 전송 성공/실패 알림 메시지 -> toastify 사용함 ㅜㅜ
 *  3. 버튼 hover css
 *  4. 스크롤 내릴 때 transition?? css 추가
 */

// TODO: https://getkap.co/ 캡처 프로그램 기억
// color 조합 https://www.webdesignrankings.com/resources/lolcolors/