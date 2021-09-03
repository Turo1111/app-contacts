import React, { createContext, useContext, useState } from "react";

const Context = createContext()

export const DataContext = ({ children }) => {

  const [listContact, setListContact] = useState([])

  const value = {
    listContact,
    addContact : (contact) =>{
      setListContact([
        ...listContact,
        contact
      ])
    },
    editContact: (contact) => {

      if (contact.id !== null) {
        let index = listContact.findIndex( item => item.id === contact.id) //buscar indice del contacto a actualizar
  
        console.log(listContact[index], contact)
        
        listContact[index] = contact // actualizarlo
 
        setListContact([...listContact]) // refrescar lista/* */
      }
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export function useAppContext() {
  return useContext(Context);
}