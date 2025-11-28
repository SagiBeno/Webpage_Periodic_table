import { useState, useEffect } from 'react';
import './App.css'
import PeriodicTable from './Components/PeriodicTable'
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import MyTextField from './Components/MyTextField';

async function fetchElements(setElements, setLoading, setFilteredElements) {
  setLoading(true)
  fetch('http://localhost:3333/api/elements')
    .then(async (res) => {
      const data = await res.json()
      await setElements(data)
      await setFilteredElements(data)
    })
    .catch(console.warn)
    .finally(() => {
      return setLoading(false)
    })
}

function App() {
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredElements, setFilteredElements] = useState([]);
  const [search, setSearch] = useState(undefined);

  useEffect(() => {
    fetchElements(setElements, setLoading, setFilteredElements)
  }, [])

  return (
    <>
      {
        elements.length > 0 && <MyTextField data={filteredElements} setSearch={setSearch}/>
      }
      {
        loading &&
        <Stack spacing={2} direction="row" alignItems="center">
          <CircularProgress size="4rem" />
        </Stack>
      }
      {
        elements.length > 0 && <PeriodicTable data={filteredElements} search={search}/>
      }
    </>
  )
}

export default App
