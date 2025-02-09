// import React from 'react';
import './index.scss';
// import Banner from '../../components/Banner';
// import IntroText from '../../components/IntroText';
// import ThreePanels from '../../components/ThreePanels';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useState, useEffect } from "react";

function Home() {
  return (
    <div className="home">
      <div className="home__content">
        {/* <Banner /> */}
        Hello this is the homepage
        {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      </div>
    </div>
  );
}

export default Home;