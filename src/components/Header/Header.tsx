import React from 'react';
import classNames from 'classnames';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header-title">
                    Front-end Developer
                </h1>
                <p className="header-desc">
                    안녕하세요,<br />
                    프론트엔드 개발자 박은애입니다.
                </p>
                <button className={ classNames('fill-button', 'reverse') }>
                    See my portfolio ▼
                </button>
            </div>
        </header>
    )
}

export default Header;