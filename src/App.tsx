import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Board } from './component/Board/Board';


const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Alpha Bingo</h1>
      <Board />
    </div>
  );
}

export default App;
