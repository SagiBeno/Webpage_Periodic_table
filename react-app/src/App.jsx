import { useState, useEffect } from 'react';
import './App.css'
import PeriodicTable from './Components/PeriodicTable'

async function fetchElements(setElements) {

  fetch('http://localhost:3333/api/elements')
    .then(async (res) => {
      const data = await res.json();
      console.log(data)
    })
    .catch(console.warn)
}

function App() {
  const [elements, setElements] = useState();

  useEffect(() => {
    fetchElements(setElements);
  }, []);

  return (
    <>
      <PeriodicTable></PeriodicTable>
    </>
  )
}

export default App
