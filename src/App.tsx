import React from 'react';
import Header from './components/Header/Header';
import Contents from './components/Contents/Contents';
import AboutMe from './components/Contents/AboutMe';
import './App.scss';

const Root = () => {
    return (
        <div>
            <Header />
            <Contents title="About Me">
                <AboutMe />
            </Contents>
        </div>
    );
};

export default Root;