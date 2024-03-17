
import styled from "styled-components";
 
export const ListBox = styled.div`
    display:flex;
    flex-direction: column;  
    border: 1px solid #3F48CC;
    background-color:white;
    height: 60vh;
    width:70vw;
    padding: 2vh;
`;
export const FilterBox = styled.div`
    display:flex;
    flex-direction: row;  
    align-items:center;
`;

export const Choice = styled.option`
    font-size:16px;
    color:#111438;
`;
export const Selector = styled.select`
     border: 1px solid #3F48CC;
     width:30vh;
`;
export const Title = styled.h1`
    font-size:30px;
    color:#111438;
    margin-left:10vw;
`;
export const Table = styled.table`
    border: 1px solid #3F48CC;
    border-collapse: collapse;
    width: 100%;
    border-spacing: 0;
`;
export const Row = styled.tr`
    text-align: center;
`;
export const Column = styled.th`
    border-bottom: 1px solid #3F48CC;
    border-right: 1px solid #3F48CC;
    padding: 2px;
    text-align: center;
`;
export const Button = styled.button`
    cursor: pointer;
    color: #2B328C;
    font-size:15px;
    border: none;
    margin-left:10px;
  &:hover {
    color: #111438;
  }
`;