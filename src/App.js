import React from 'react'
import './App.css';
import Navbar from './Componetns/Navbar';
import User from './Componetns/User';

function App() {
  return (
    <div className="App">
      <div className="maindiv">
            <Navbar />
            <User/>
        </div>
    </div>
  );
}

export default App;