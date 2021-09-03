import React from 'react'
import { Container, DivSearch, IconSearch, InputSearch } from './styles'

export const Search = ({placeholder, search}) => {

  return (
    <Container>
      <InputSearch placeholder={placeholder} radius={"10px"} {...search} />
    </Container>
  )
}