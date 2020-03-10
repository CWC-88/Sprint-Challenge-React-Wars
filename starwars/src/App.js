

import React, { useEffect, useState } from "react";
import "../../starwars/src/App.css";
import ReactDOM from "react-dom";
import styled from 'styled-components'
const TextStlyle = styled.h5
`color:red

`

;



function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch("https://swapi.co/api/people/")
      .then(response => response.json())
      .then(({ results }) => {
        setCharacters(results); 
      });
  }, []); 
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {characters.map((character, index) => (
        <div key={index} className="card">
          <TextStlyle>{character.name}</TextStlyle>
        </div>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;