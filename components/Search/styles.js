import styled from "styled-components";
import {ImSearch} from 'react-icons/im'

export const InputSearch = styled.input `
  width: 100%;
  height: ${props => props.height ? props.height : "30px"};
  border: none;
  box-shadow: 1px 1px 5px black;
  font-size:15px;
  padding: 20px;
  border-radius: ${props => props.radius ? props.radius : "none"};
  ::placeholder {
    font-size: 15px;
  }
  :focus{
    border:none;	
    outline:none;
  }
`

export const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: search;
  width: 100%;
`
