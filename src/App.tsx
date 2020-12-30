import React from 'react';
import Header from './components/Header/Header';
import Contents from './components/Container/Contents';
import AboutMe from './components/Contents/AboutMe';
import Project from './components/Contents/Project';
import ContactMe from './components/Contents/ContactMe';
import './App.scss';

const Root = () => {
    return (
        <div>
            <Header />
            <Contents title="About Me">
                <AboutMe />
            </Contents>
            <Contents title="Project">
                <Project />
            </Contents>
            <Contents title="Contact Me">
                <ContactMe />
            </Contents>
        </div>
    );
};

export default Root;