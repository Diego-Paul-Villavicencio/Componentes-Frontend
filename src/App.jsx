import React from 'react';
import CodeRepository from './CodeRepository.jsx';
import ColorTransition from './ColorTransition.jsx';
import Access from './Access.jsx';
import TextCredits from './Credits.jsx';
import './App.css';

const App = () => {
    return (
        <>
        <CodeRepository />
        <ColorTransition />
        <Access />
        <TextCredits />
        </>
    );
}
  
  export default App;