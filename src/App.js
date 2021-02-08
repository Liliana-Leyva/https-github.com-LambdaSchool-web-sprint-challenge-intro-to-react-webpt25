import React, {useEffect, useState} from 'react';
import Character from './components/Character'
import axios from 'axios';
import styled from 'styled-components';

const H1 = styled.h1`
  text-align: center;
  font-family: franklin gothic;
  color: gold;
  font-size: 60px;
`;

const AppDiv = styled.div`
  color: blue;
   
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
 
    const [characters, setCharacters] = useState([]);
    
    useEffect(() => {
        axios.get('https://swapi.dev/people')
        .then(response => {
            console.log(response.data.results);
            setCharacters(response.data.results)
        })
        .catch(error => console.log(error))
        
    }, [])
    return (
  
      <AppDiv className="App">
        <H1 className="Header">React Wars</H1>
        <Character characters={characters}/>
      </AppDiv>
    );
}

export default App;
