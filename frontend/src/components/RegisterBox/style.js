
import styled from "styled-components";

export const FormBox = styled.div`
    display:flex;
    padding-left:12vw;
    flex-direction: column;  
    border: 1px solid #3F48CC;
    width:120vh;
    height:60vh;
    background-color:white;
`;

export const Button = styled.button`
    cursor: pointer;
    color: #B4C3FF;
    background-color: #2B328C;
    border: none;
    width: 30vh;
    padding: 10px;
    margin-bottom: 1vh;
    font-size: 17px;
    font-weight: bold;
    border-radius: 11.6px;
    margin-left:28vw;
  /* Estilos padrão */
  &:hover {
    color: #B4C3FF;
    background-color: #111438;
  }
`;

export const BoxD= styled.div`
    border: 1px solid #3F48CC;
    width:80vh;
    height:15vh;
    margin-top:5vh;
    margin-bottom:5vh;
`;

export const Description = styled.input`
    width: 75vh;
    min-height: 50px; 
    max-height: 200px;
    resize: vertical; 
    text-align: left;
    border: none; 
    outline: none;
    overflow-y: auto;
`;
export const Name = styled.input`
     border: 1px solid #3F48CC;
     width:40vh;
     padding: 4px;
     margin-right:2vw;
`;

export const Choice = styled.option`
    font-size:16px;
    color:#111438;
`;
export const Selector = styled.select`
     border: 1px solid #3F48CC;
     width:30vh;
     padding: 4px;
`;
export const Title = styled.h1`
    font-size:30px;
    color:#111438;
    margin-left:10vw;
`;

export const Box = styled.div`
    display:flex;
    align-items: center;
    flex-direction: row;  
`;

