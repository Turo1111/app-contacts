import React, { useState } from "react"
import Button from "../components/Button"
import {Search} from "../components/Search"
import {GoPlus} from "react-icons/go"
import ListContact from "../components/ListContact"
import { useInputValue } from "../hooks/useInputValue"
import { RandomContact } from "../components/RandomContact"

export default function Home() {
  
  const search = useInputValue('')

  return (
    <div style={{padding: "5%"}}>
      <Search placeholder={"Buscar contacto"} search={search} />
      <Button to="/newcontact">
        ADD CONTACT <GoPlus/>
      </Button>
      <RandomContact/>
      <ListContact search={search.value}/>
    </div>
  )
}
