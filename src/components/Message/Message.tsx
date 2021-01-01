import React, { ReactChildren, ReactChild } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Message = () => {
    return (
        <aside className="message-container">
            <div className="message">
                <div className="message-icon" aria-hidden="true">
                    <FontAwesomeIcon icon="check-circle" />
                </div>
                <div className="message-contents">
                    <p className="message-title">Success</p>
                    <p className="message-desc">메일 전송을 완료하였습니다.</p>
                </div>
                <button className="message-button">
                    <FontAwesomeIcon icon="times" aria-label="닫기" title="닫기" />
                </button>
            </div>
        </aside>
    );
}

export default Message;