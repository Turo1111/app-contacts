import React from 'react'
import { AvatarWrapper, ButtonWrapper, Center, Container, Form, Input } from './styles'
import { BsFillPersonFill } from 'react-icons/bs'
import Button from '../Button'
import { useInputValue } from '../../hooks/useInputValue'
import { useAppContext } from '../../context/Context'
import { useRouter } from 'next/dist/client/router'

const FormNewContact = () => {

  const router = useRouter()

  const name = useInputValue('')
  const lastname = useInputValue('')
  const number = useInputValue('')
  const email = useInputValue('')

  const { addContact, listContact } = useAppContext()

  const createContact = () => {
    addContact({
      id: listContact.length,
      name: name.value,
      lastname : lastname.value,
      number : number.value,
      email : email.value
    })
    router.push("/")
  }

 return (
  <Container>
    <Center>  
      <AvatarWrapper>
        <BsFillPersonFill/>
      </AvatarWrapper>
    </Center>
    <Form>
      <Input placeholder="Name" {...name} />
      <Input placeholder="Last name" {...lastname} />
      <Input placeholder="Number" {...number} />
      <Input placeholder="Email" {...email} />
    </Form>
    <ButtonWrapper>
      <Button borderRadius="0" height="50px" to="/" >Cancelar</Button>
      <Button borderRadius="0" background="#9BDF46" height="50px" onClick={createContact} >Agregar</Button>
    </ButtonWrapper>
  </Container>
 )
}

export default FormNewContact