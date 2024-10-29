import React from 'react';
import Button from './Button';
import './App.css';

const WelcomeMessage = () => {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div className="right-section">
            <h1>Üdvözlöm a Comnica Signature-ben!</h1>
            <p>
                A következőkben végigvezetjük dokumentumai elfogadásán és aláírásán.
                A folyamat több percet is igénybe vehet, ezért kérjük, csak akkor kezdje el, ha
                készen áll rá.
            </p>
            <Button onClick={handleClick}>Kezdhetjük</Button>
        </div>
    );
};

export default WelcomeMessage;