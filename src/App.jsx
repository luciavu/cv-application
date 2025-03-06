//import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Preview from './components/Preview';
import InputSection from './components/input/InputSection';

function App() {
  return (
    <>
      <Header></Header>
      <div className="app-container">
        <InputSection></InputSection>
        <Preview></Preview>
      </div>
    </>
  );
}

export default App;
