import { useEffect, useState } from "react";
import styled from "styled-components";

export const Container = styled.div `
  /* display: ${props => props.close ? 'block': 'none'}; */
  display: none;
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`


export const Content = styled.div `
  background-color: rgba(250, 250, 250);
  margin: 35% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 95%; /* Could be more or less, depending on screen size */
`


const ChecklistWrapper = ({className, children, id, name, checked, onClick}) => {

  return(
  <div className={className} >
    <input id={id} type="checkbox" name={name} checked={checked} onChange={onClick}/>
    <label htmlFor={id}>{children}</label>
  </div>
  )
}

export const Checklist = styled(ChecklistWrapper) `
  --background: #ffffff;
  --text: #414856;
  --check: #4F29F0;
  --disabled: #C3C8DE;
  --width: 100px;
  --height: 0;
  --border-radius: 10px;
  background: var(--background);
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  position: relative;
  box-shadow: 0 10px 30px rgba(#414856, 0.05);
  /* padding: 30px 45px; */
  display: grid;
  grid-template-columns: 30px auto;
  align-items: center;
  label {
    color: var(--text);
    position: relative;
    cursor: pointer;
    display: grid;
    align-items: center;
    width: fit-content;
    transition: color .3s ease;
    &::before,
    &::after {
      content:"";
      position: absolute;
    }
    &::before {
      height: 2px;
      width: 8px;
      left: -27px;
      background: var(--check);
      border-radius: 2px;
      transition: background .3s ease; 
    }
    &:after {
      height: 4px;
      width: 4px;
      top: 8px;
      left: -25px;
      border-radius: 50%;
    }
  }
  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    height: 15px;
    width: 15px;
    outline: none;
    border: 0;
    margin: 0 15px 0 0;
    cursor: pointer;
    background: var(--background);
    display: grid;
    align-items: center;
    &::before,
    &::after {
      content:"";
      position: absolute;
      height: 2px;
      top: auto;
      background: var(--check);
      border-radius: 2px;
    }
    &::before {
      width: 0px;
      right: 60%;
      transform-origin: right bottom;
    }
    &::after {
      width: 0px;
      left: 40%;
      transform-origin: left bottom;
    }
    &:checked {
      &::before {
        animation: check-01 .4s ease forwards;
      }
      &::after {
        animation: check-02 .4s ease forwards;
      }
      + label {
        color: var(--disabled);
        animation: move .3s ease .1s forwards;
        &::before {
          background: var(--disabled);
          animation: slice .4s ease forwards;
        }
        &::after {
          animation: firework .5s ease forwards .1s;
        }
      }
    }
  }
`

const CheckListGroupWP = ({className, children, id, major, minor, onClick}) => {

  /* const [mayor, setCheck1] = useState(true)
  const [menor, setCheck2] = useState(true)
  const [selectCheck, setSelectCheck] = useState(select) */

  /* const onClick = (e) =>{
    if(id == e.target.id){
      setCheck1(!mayor)
      setCheck2(true)
    }
    if(id+1 == e.target.id){
      setCheck2(!menor)
      setCheck1(true)
    }
  } */

  /* useEffect(() => {
    if (mayor) {
      setSelectCheck("mayor")
    }
    if (menor) {
      setSelectCheck("menor")
    }
  }, [mayor, menor]) */


  return(
    <div className={className} >
      {children}
      <Checklist id={id} name="major" checked={major} onClick={onClick}>Mayor</Checklist>
      <Checklist id={id+1} name="minor" checked={minor} onClick={onClick}>Menor</Checklist>
    </div>
  )
}

export const CheckListGroup = styled(CheckListGroupWP) `
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`