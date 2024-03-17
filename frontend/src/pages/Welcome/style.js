import styled from "styled-components";

export const ViewWelcome = styled.div`
    background-color:#C7D2FF;
    height:100vh;
`;

export const BoxText = styled.div`
    display:flex;
    flex-direction: column; 
    align-items: center;
    padding:20vh;
`;

export const Text = styled.h1`
    font-size:35px;
    color:#111438;
`;
export const Message = styled.p`
    font-size:28px;
    color:#0076A8;
`;
export const Button = styled.button`
    cursor: pointer;
    color: white;
    background-color: #22D0FF;
    border: 2px solid #111438 ;
    padding: 20px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 100%;
    width:20vh;
    height: 10vh;
    &:hover {
    color: #B4C3FF;
    background-color: #111438;
  }
`;
