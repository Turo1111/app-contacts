import styled from "styled-components";
import { IoIosArrowDown } from 'react-icons/io'

export const Container = styled.div `
  width: 100%;
  margin: 10px 0;
  border-top: 1px solid gray;
  padding: 10px 0;
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

const Text = styled.div `
  text-align: center;
  text-overflow: ellipsis;
  padding: 0 10px;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis; 
`

const FilterWrapper = ({className, children}) => (
  <div className={className}>
    FILTERS: 
    <Text>{children}</Text>
    <IconWrapper>
      <IoIosArrowDown/>
    </IconWrapper>
  </div>
)

export const Filter = styled(FilterWrapper) `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px ;
`