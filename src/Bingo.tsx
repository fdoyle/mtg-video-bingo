import React from 'react';
import './Bingo.css';
import { Board } from './component/Board/Board';
import { SetPicker } from './component/Picker/SetPicker'
import * as yaml from 'js-yaml';
import { setText, setImages } from './data'
import { HashRouter as Router, Route, Link } from "react-router-dom"
//we're using HashRouter because apparently it works better with github pages


const Bingo: React.FC = () => {
  console.log(setText)
  let sets = yaml.load(setText);
  console.log(JSON.stringify(sets))
  let setTitles = Object.keys(sets)

  return (
    <div className="App">
      <Router basename="/mtg-video-bingo">
        <SetPicker sets={setTitles} />
        <h1>Bingo</h1>
        <Route path="/" exact render={() => <Board sets={sets} />} />
        <Route path="/set/:slug/" render={() => <Board sets={sets} />} />
      </Router>
    </div>
  );
}

export default Bingo;
