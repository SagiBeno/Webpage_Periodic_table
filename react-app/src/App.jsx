import { useState, useEffect } from 'react';
import './App.css'
import PeriodicTable from './Components/PeriodicTable'
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import MyTextField from './Components/MyTextField';
import SelectComponent from './Components/SelectComponent';
import Box from '@mui/material/Box';

async function fetchElements(setElements, setLoading, setFilteredElements, setCategories, setMaxCols, setMaxRows) {
  setLoading(true)
  fetch('http://localhost:3333/api/elements')
    .then(async (res) => {
      const data = await res.json()
      await setElements(data)
      await setFilteredElements(data)

      const categories = [];

      data.map((element) => {
        if (!categories.includes(element.category)) categories.push(element.category);
      })

      console.log(categories)
      setCategories(categories)
      setMaxCols(Math.max(...data.map(element => element.xpos)))
      setMaxRows(Math.max(...data.map(element => element.ypos)))

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
  const [categories, setCategories] = useState([]);
  const [maxCols, setMaxCols] = useState(0);
  const [maxRows, setMaxRows] = useState(0);

  useEffect(() => {
    fetchElements(setElements, setLoading, setFilteredElements, setCategories, setMaxCols, setMaxRows)
  }, [])

  return (
    <>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}} className='controllerBox'>
        {
          elements.length > 0 && <MyTextField data={filteredElements} setSearch={setSearch}/>
        }
        {
        filteredElements.length > 0 && <SelectComponent data={elements} categories={categories} setFilteredElements={setFilteredElements}/>
        }
      </Box>
      
      {
        loading &&
        <Stack spacing={2} direction="row" alignItems="center">
          <CircularProgress size="4rem" />
        </Stack>
      }
      {
        filteredElements.length > 0 && <PeriodicTable data={filteredElements} maxCols={maxCols} maxRows={maxRows} search={search}/>
      }
    </>
  )
}

export default App
