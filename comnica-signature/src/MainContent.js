import React from 'react';
import './App.css';

const MainContent = () => {
    return (
        <>
            <div className="left-section">
                <div className="top">
                    <img src="https://comnica.hu/wp-content/uploads/2023/01/cropped-comnica_logo_fejlec-1.png"
                         alt="Comnica"
                         className="logo"/>
                </div>
                <div className="wrapper">
                    <div className="txt">
                        <h2>Comnica Signature</h2>
                        <b>Digitális aláíró szolgáltatás a Comnicától</b>
                    </div>
                    <figure className="illustration-container">
                        <img src="comp.svg" alt="computer"/>
                    </figure>
                </div>
            </div>
        </>
    );
};

export default MainContent;