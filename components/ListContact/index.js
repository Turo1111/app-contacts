import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAppContext } from '../../context/Context'
import ItemListContact from '../ItemListContact'
import ModalFilterContact from '../ModalFilterContact'
import { Container, Filter } from './styles'

const ListContact = ({search}) => {

  const { listContact } = useAppContext()

  const [page, setPage] = useState(5)

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  useEffect(()=>{
    if (entry) {
      if (entry.isIntersecting) {
        setPage(page+2)
      }
    }
  }, [entry])

  let filterContact = listContact.filter( contact => {
    
    return (contact.name.toLowerCase()).indexOf(search.toLowerCase()) !== -1 || (contact.lastname.toLowerCase()).indexOf(search.toLowerCase()) !== -1 || (contact.number.toLowerCase()).indexOf(search.toLowerCase()) !== -1
  } )

  const lazyContact = filterContact.slice(0,page)
  
 return (
  <Container>
    <Filter>
      Nombre, Apellido, numero, y mas dasjdhnasjkdbasjkdbasjkdbajksdbajkbdjkasbdjkasbdjkasbdk
    </Filter>
    {
      lazyContact.map((item)=>{
          
         return <ItemListContact key={item.name} {...item} />
      })
    }
    <div ref={ref}></div>
    <ModalFilterContact/>
  </Container>
 )
}

export default ListContact