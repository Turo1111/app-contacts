import { useState } from "react"

export function useLocalStorage(key, initialValue) {
  const [storedValue, setValue] = useState(()=> {
    try {
      if (typeof window !== 'undefined'){
        const item = window.localStorage.getItem(key)
        return item !== null ? JSON.parse(item) : initialValue
      }
    }
    catch(e){
      return initialValue
    }
  })

  const setLocalStorage = value => {
    try {
      if (typeof window !== 'undefined'){
        window.localStorage.setItem(key, JSON.stringify(value))
        setValue(value)
      }  
    }
    catch (e) {
      console.log(e)
    }
  }
  
  return [ storedValue, setLocalStorage ]
}