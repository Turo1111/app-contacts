import React, { useRef, useState } from 'react'
import Button from '../Button';
import { Checklist, CheckListGroup, Container, Content } from './styles'

const ModalFilterContact = () => {

  const [name, setName] = useState({major: true, minor: true})
  const [number, setNumber] = useState({major: true, minor: true})
  const [phone, setPhone] = useState({major: true, minor: true})

  const onClickCheck = (e) => {
    console.log(e.target.checked);
  }

 return (
  <Container>
    <Content>
      <CheckListGroup id={1} major={name.major} minor={name.minor} onClick={onClickCheck}>
        Nombre : 
      </CheckListGroup>
      <CheckListGroup id={3} major={number.major} minor={number.minor}>
        Apellido : 
      </CheckListGroup>
      <CheckListGroup id={5} major={phone.major} minor={phone.minor}>
        Telefono : 
      </CheckListGroup>
      <Button>Guardar</Button>
    </Content>
  </Container>
 )
}

export default ModalFilterContact