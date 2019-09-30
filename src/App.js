import React from 'react';
import './App.css';
import Nav from './component/Core/Navbar';
import Bg from './component/Core/Background';
import Home from './component/Home'

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Bg/>
    </div>
  );
}

export default App;
