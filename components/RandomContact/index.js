import React from 'react'
import { useAppContext } from '../../context/Context'
import Button from '../Button'
const axios = require('axios');

export const RandomContact = () => {

  const { addContact } = useAppContext()

  const randomContact = () => {

    let data 

    axios.get('https://randomuser.me/api/')
      .then(function (response) {

        data = response.data.results[0]
        addContact({
          id: data.id.value,
          name: data.name.first,
          lastname : data.name.last,
          number : data.phone,
          email : data.email,
          image : data.picture.large
        })
      })
      .catch(function (error) {
        console.log(error);
      })
    }

  return (
    <Button onClick={randomContact}>
        RANDOM CONTACT
    </Button>
  )
}