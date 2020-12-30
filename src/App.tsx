import React from 'react';
import Header from './components/Header/Header';
import ContentsContainer from './components/Contents/ContentsContainer';
import AboutMe from './components/Contents/AboutMe';
import './App.scss';

const Root = () => {
    return (
        <div>
            <Header />
            <ContentsContainer title="About Me">
                <AboutMe />
            </ContentsContainer>
        </div>
    );
};

export default Root;