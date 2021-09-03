import styled from "styled-components";

export const Container = styled.div `
 width: 100%;
 padding: 0 15px;
 border: 0.1rem solid gray;
 border-radius: 25px;
 margin: 10px 0;
`

export const Card = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`

export const Text = styled.div `
  text-align: center;
`

export const Name = styled.div `
  font-size: 18px;
  font-weight: 600;
`

export const Number = styled.div `
  font-size: 13px;
`

export const IconWrapper = styled.span `
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: black;
  margin: 5px;
  border-radius: 50%;
  padding: 5px;
  :hover{
    color: white;
    background-color: black;
  }
`