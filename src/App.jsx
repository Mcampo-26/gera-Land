import React from 'react';
import {Navegar} from './components/Navegar.jsx';
import {Carrousel} from './components/Carrousel.jsx';
import {Foter} from './components/Foter.jsx'
import './App.css';



const App = () => {
  return (
    <>
    <div >
      <Navegar />
      <Carrousel/>
      <Foter/>
      </div>
      </>
    
  );
};

export default App;
