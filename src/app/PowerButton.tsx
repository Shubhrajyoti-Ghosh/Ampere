import React, { useState } from 'react';
import './PowerButton.css';

interface PowerButtonProps {
  onPowerOn: () => void;
}

const PowerButton: React.FC<PowerButtonProps> = ({ onPowerOn }) => {
  const [isOn, setIsOn] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
      setIsOn(true);
      setTimeout(() => {
        onPowerOn(); // Call the parent trigger
      }, 500);
    }, 150);
  };
  return (
    <div className="power-wrapper">
        <div className={`outer-circle ${isOn ? 'on' : ''}`}>
            <div className="middle-circle">
                <div className={`inner-circle ${isPressed ? 'pressed' : ''}`}>
                    <button className="power-button" onClick={handleClick}>
                        <svg 
                        width="80" height="80" viewBox="0 0 127 127" fill="none" xmlns="http://www.w3.org/2000/svg"
                        className={`icon ${isOn ? 'green' : 'red'}`}
                        >
                            <path 
                            d="M63.5 25.4V63.5M86.3125 34.9375C93.0335 40.0905 97.4375 48.3565 97.4375 57.6875C97.4375 74.8553 83.1678 88.9375 65.875 88.9375C48.5822 88.9375 34.3125 74.8553 34.3125 57.6875C34.3125 48.3565 38.7165 40.0905 45.4375 34.9375" 
                            stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default PowerButton;
