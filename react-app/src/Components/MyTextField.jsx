import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

export default function MyTextField(props) {
    const elements = props?.data;
    const [search, setSearch] = useState('all');

    const handleOnchange = e => {
        const search = e.target.value.toLowerCase();
        if (search.length > 0) props?.setSearch(search);
        else props?.setSearch(undefined);
    }

    return (
        <Box>
            <TextField id="outlined-basic" label="Search an element..." variant="outlined" onChange={(e) => handleOnchange(e)} />
        </Box>
    )
}