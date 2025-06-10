'use client';

import React, { useState } from 'react';
import PowerButton from '../PowerButton';
import Home from './page'; // my actual site contents
import './StartupScreen.css';

const StartupScreen = () => {
  const [start, setStart] = useState(false);

  return (
    <>
      {!start ? (
        <div className="startup-container">
          <PowerButton onPowerOn={() => setStart(true)} />
        </div>
      ) : (
        <Home />
      )}
    </>
  );
};

export default StartupScreen;
