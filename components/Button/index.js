import Link from 'next/link'
import React from 'react'
import { Container } from './styles'

const Button = ({children, borderRadius, width, height, background, to = "/", onClick}) => {
 return (
   <Link href={to}>
    <Container borderRadius={borderRadius} width={width} height={height} background={background} onClick={onClick}>
      {children}
    </Container>
   </Link>
 )
}

export default Button