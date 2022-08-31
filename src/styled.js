import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Verdana', sans-serif;
  }
`;

export const Body = styled.section`
    background-color: #ffa07a;
    background-size: 400% 400%;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;  
`;

export const Title = styled.h1`
    font-size: 3em;
    margin: 50px;
    color: #fff;
`;

export const Main = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    width: 70%;
    height: 7vh;
    background-color: #8B7D7B;
    border-radius: 5px;
`;

export const Label = styled.label`
    margin-left: 10px;
`;

export const Input = styled.input`
    width: 87%;
    height: 5vh;
    color: #fff;
    background: none;
    border: none; 
    outline: none;
    font-size: 1em;
`;

export const Button = styled.button`
    cursor: pointer;
    color: #fff;
    background: none;
    padding: 2px 5px;
    margin-right: 10px;
    border: 1px solid #fff;
    font-size: .9em;
`;

export const Result = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin: 20px;
    border-bottom: 2px solid #fff;
    color: #fff;
`;

export const Check = styled.button`
    cursor: pointer;
    background: none;
    border: 1px solid #fff;
    width: 35px;
    color: #f00;
    margin-bottom: 5px;
    font-size: 1em;
    padding: 2px
`;