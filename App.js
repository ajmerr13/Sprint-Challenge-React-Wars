import React from 'react';
import './App.css';
import './components/StarWars';
import StarWarsNames from './components/Starwars';


const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StarWarsNames/>
    </div>
  );
}