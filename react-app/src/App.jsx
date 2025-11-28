import { useState, useEffect } from 'react';
import './App.css'
import PeriodicTable from './Components/PeriodicTable'
import Spinner from 'react-bootstrap/Spinner';

async function fetchElements(setElements, setLoading) {
  setLoading(true)
  fetch('http://localhost:3333/api/elements')
    .then(async (res) => {
      const data = await res.json()
      await setElements(data)
    })
    .catch(console.warn)
    .finally(() => {
      return setLoading(false)
    })
}

function App() {
  const [elements, setElements] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchElements(setElements, setLoading)
  }, [])

  return (
    <>
      {
        loading && <Spinner animation="border" variant="info" />
      }
      {
        elements.length > 0 && <PeriodicTable data={elements}/>
      }
    </>
  )
}

export default App
