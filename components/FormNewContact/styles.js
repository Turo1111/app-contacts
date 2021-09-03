import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  display: inline-block;
  position: relative;
  left: 50%; 
  transform: translateX(-50%);
`

export const AvatarWrapper = styled.span `
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
  background-color: gray;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`

export const Center = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Form = styled.div `
  padding: 15px;
  margin: 25px 0;
  
`

export const Input = styled.input `
  margin: 15px 0;
  width: 100%;
  font-size: 15px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid gray;
  :focus {
    border: 2px solid #2D4059;
    border-radius: 10px;
    outline:none;
  }
`

export const ButtonWrapper = styled.div `
  padding: 15px 5%;
  display: flex; 
  justify-content: center;
`