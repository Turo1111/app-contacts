import React from 'react'
import { ButtonWrapper, Container, Form, Input } from './styles'
import Button from '../Button'
import { useInputValue } from '../../hooks/useInputValue'
import { useAppContext } from '../../context/Context'

const FormEditContact = ({id, image,  name, number, lastname, email, closeEdit}) => {

  const nameEdit = useInputValue(name)
  const lastnameEdit = useInputValue(lastname)
  const numberEdit = useInputValue(number)
  const emailEdit = useInputValue(email)

  const { editContact } = useAppContext()

  const saveContact = () => {
    editContact({
      id,
      image,
      name: nameEdit.value,
      lastname : lastnameEdit.value,
      number : numberEdit.value,
      email : emailEdit.value
    })
    closeEdit()
  }

 return (
  <Container>
    <Form>
      <Input placeholder="Name" {...nameEdit} />
      <Input placeholder="Last name" {...lastnameEdit} />
      <Input placeholder="Number" {...numberEdit} />
      <Input placeholder="Email" {...emailEdit} />
    </Form>
    <ButtonWrapper>
      <Button borderRadius="0" height="50px" to="/" >Cancelar</Button>
      <Button borderRadius="0" background="#9BDF46" height="50px" onClick={saveContact} >Guardar</Button>
    </ButtonWrapper>
  </Container>
 )
}

export default FormEditContact