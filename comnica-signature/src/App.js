import React from 'react';
import './App.css';
import MainContent from './MainContent';
import WelcomeMessage from './WelcomeMessage';

function App() {
    return (
        <>
            <div className="app-container">
                <MainContent/>
                <WelcomeMessage/>
            </div>
        </>
    )
        ;
}

export default App;
