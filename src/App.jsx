//import { useState } from 'react';
import './App.css';
import Preview from './components/Preview';
import InputSection from './components/input/InputSection';

function App() {
  return (
    <>
      <div className="app-container">
        <InputSection></InputSection>
        <Preview></Preview>
      </div>
    </>
  );
}

export default App;
