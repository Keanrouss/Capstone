import { useEffect, useState } from 'react'
//import React from 'react'
import './App.css'

const Back_URL = 'http://localhost:8080'
const API_URL= "https://www.perenual.com/api/v2/species-list?key=[sk-msZR68792b6b92b8511454]"
function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')
  
  //  const inputRef = useRef()
  useEffect(()=>{
    getPlants()
  }, [])


  async function getPlants() {
    try {
      const response = await fetch("https://www.perenual.com/api/v2/species-list?key=[sk-msZR68792b6b92b8511454]")
      const data = await response.json()
      setPlants(data.data)
    } catch (error) {
      console.log('error')
    }
  }
}

export default App;
