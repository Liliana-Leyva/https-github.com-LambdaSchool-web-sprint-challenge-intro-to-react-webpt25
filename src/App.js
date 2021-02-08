import React, {useState, useEffect} from 'react';
import axios from 'axios';
//importing character.js
import Character from './components/Character';
//importing styled to make the site pretty
import styled from 'styled-components';

//styling h1, putting the text on the center of the page.
const H1 = styled.h1`
  text-align: center;
  font-family: franklin gothic;
  color: #FFE81F;
  font-size: 100px;
`;

const AppDiv = styled.div`
`;
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


//setting the state properties.
  const [characters, setCharacters] = useState([])
  
  
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
  //making the api request and getting the response
    axios.get('https://swapi.py4e.com/api/people')
    .then(res => {
      console.log(res.data.results)
      setCharacters(res.data.results)})
    .catch(err => console.log(err));
  }, [])
  return (
    //rendering the api response
    <AppDiv className="App">
      <H1 className="Header">React Wars</H1>
      <Character characters={characters}/>
    </AppDiv>
  );
}

export default App;