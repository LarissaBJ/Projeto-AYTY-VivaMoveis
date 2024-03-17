
import styled from "styled-components";
export const EditView = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color:rgba(195, 198, 210, 0.45);
    z-index:1000;
    display:flex;
    align-items: center;
    justify-content: center;
`;
export const ModalFrame = styled.div`
    position:absolute;
    width:60vw;
    height:60vh;
    top:20%;
    left:20%;
    border-radius: 10px;
    background-color:rgba(108, 135, 245, 0.51);
    display:flex;
    flex-direction:column;
    align-items:center;
`;
export const Head= styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding:6px;
`;

export const Title = styled.h1`
    font-size:25px;
    color:#111438;
    margin-left:18vw;
`;
export const Close = styled.button`
    cursor: pointer;
    color: #B4C3FF;
    background-color: #2B328C;
    border: none;
    padding: 5px;
    margin-bottom: 1vh;
    font-size: 17px;
    font-weight: bold;
    border-radius:100%;
    margin-left:15vw;
  /* Estilos padrão */
  &:hover {
    color: #B4C3FF;
    background-color: #111438;
  }
`;
export const Box1 = styled.div`
    display:flex;
    align-items: center;
    flex-direction: row; 
    margin-top:20px; 
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
export const Box2 = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;  
`;
export const BoxD= styled.div`
    border: 1px solid #3F48CC;
    width:80vh;
    height:15vh;
    margin-top:20px;
    margin-bottom:20px;
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

export const Confirm = styled.button`
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





