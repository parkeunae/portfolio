import React, { ReactChildren, ReactChild } from 'react';

interface ContentsProps {
    title: string;
    children: ReactChild | ReactChildren;
}

const Contents = ({ title, children }: ContentsProps) => {
    return (
        <section className="contents">
            <div className="container">
                <h2 className="contents-title">
                    { title }
                </h2>
                { children }
            </div>
        </section>
    )
}

export default Contents;