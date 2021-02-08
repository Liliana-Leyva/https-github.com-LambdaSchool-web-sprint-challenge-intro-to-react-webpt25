// Write your Character component here
import React from 'react'
import styled from 'styled-components'


// const Character = (props) => {

    
//     return(
//         <div>
//             {props.characters.map(item => {
//             return <h2 key={item.name}>{item.name} {item.gender}{item.birth_year}</h2>
//             })}
//         </div>
//     ) 
// }
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledH2 = styled.h2`
    border: solid green 2px;
    padding: 8px 8px;
    text-align: center;
    color: #F4F2C9;
    background-color: #265999 ;
`;

function Character(props) {
    return (
        <StyledDiv>
        <div>{props.characters.map(char => {
            return <StyledH2 key={char.name}>{char.name} {char.birth_year}</StyledH2>
        })}
        </div>
        </StyledDiv>
    )
    //
}

export default Character;







