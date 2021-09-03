import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Card, Container, IconWrapper, Name, Number, Text } from './styles'
import Image from "next/image"
import FormEditContact from '../FormEditContact'

const ItemListContact = ({ id, image = '/images/avatar.jpeg' , name, number, lastname, email}) => {

  const [open, setOpen] = useState(false)

  const data = {id, image, name, number, lastname, email}

 return (
    <Container>
      <Card>
        <Image src={image} width={60} height={60} className="avatar" />
        <style jsx global>{`
        .avatar {
          border-radius: 50%;
        }
        `}</style>
        <Text>
          <Name>{name + " " + lastname}</Name>
          <Number>{number}</Number>
        </Text>
        <IconWrapper onClick={()=>setOpen(!open)}>
          <IoIosArrowDown/>
        </IconWrapper>
      </Card>
      {
        open && (
          <FormEditContact {...data} closeEdit={()=>setOpen(false)}/>
        )
      }
    </Container>
 )
}

export default ItemListContact