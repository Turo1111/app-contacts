import styled from "styled-components";

export const Container = styled.a `
  width: ${props => props.width ? props.width : "100%"};
  height: ${props => props.height ? props.height : "60px"};
  background-color: ${props => props.background ? props.background : "#EA5455"};
  border-radius: ${props => props.borderRadius ? props.borderRadius : "10px"};
  display: flex;
  justify-content:center;
  align-items:center;
  margin: 20px 0px;
  font-weight: 700;
  color: white;
  border: 0;
  :hover {
    border: 2px solid ${props => props.background ? props.background : "#EA5455"};
    background-color: transparent;
    color: #1A1C20;
  }
`