// Write your Character component here
import React from 'react';
import styled from 'styled-components';

//styling the divs 
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;

//styling the information we are going to display
const StyledH2 = styled.h2`
    border-radius:12px;
    padding: 15px 15px;
    text-align: center;
    color: white;
    font-size: 30px;
    background-color: black;
`;

//looping over the api response and showing on screen the character name, gender and birth year
function Character(props) {
    return (
        <StyledDiv>
        <div>{props.characters.map(char => {
            return <StyledH2 key={char.name}>{char.name}{" "}{char.gender} { " "} {char.birth_year}</StyledH2>
        })}
        </div>
        </StyledDiv>
    )
}

export default Character;







