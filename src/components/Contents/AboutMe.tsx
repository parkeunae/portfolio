import React from 'react';

const AboutMe = () => {
    return (
        <>
            <dl>
                <div className="contents-desc">
                    <dt className="sr-only">이름</dt>
                    <dd>
                        <strong>박은애</strong>
                    </dd>
                </div>
                <div className="contents-desc">
                    <dt className="sr-only">이메일</dt>
                    <dd>
                        <strong>eapark108@gmail.com</strong>
                    </dd>
                </div>
                <div className="contents-long-desc">
                    <dt className="sr-only">자기소개</dt>
                    <dd>
                        안녕하세요, 차근차근 배움을 쌓아가고 있는 신입 프론트엔드 개발자입니다.<br/>
                        사용자 입장으로 더 좋은 UI를 생각하고, 개발자 입장으로 클린 코드를 만들고자 노력합니다.<br/>
                        맡은 일은 끝까지 해내는 책임감과 부족한 점은 채워나가는 끈기로 계속해서 성장해가겠습니다.
                    </dd>
                </div>
            </dl>
            <div>
                <a
                    className="anchor-button"
                    href="https://github.com/parkeunae"
                    target="_blank"
                >
                    Github &#x2192;
                </a>
                <a
                    className="anchor-button"
                    href="https://enai.tistory.com/"
                    target="_blank"
                >
                    Blog &#x2192;
                </a>
                <a
                    className="anchor-button"
                    href="https://drive.google.com/file/d/1Lb6sVraf5gBWpA4s9-6u33TFcBO33oxM/view?usp=sharing"
                    target="_blank"
                >
                    이력서 &#x2192;
                </a>
            </div>
        </>
    );
}

export default AboutMe;