import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";

export default function SelectComponents(props) {
    const categories = props?.categories;
    const elements = props?.data;
    const [category, setCategory] = useState('all');

    const handleChange = e => {
        setCategory(e.target.value)

        if (e.target.value === 'all') props?.setFilteredElements(elements);
        else {
            const filteredElements = [];
            elements.map((element) => {
                if (element.category === e.target.value) filteredElements.push(element);
            })
            props?.setFilteredElements(filteredElements);
        }
    }

    return (
        <Box sx={{width: '200px'}}>
            <FormControl fullWidth>
                <InputLabel id="select-label">Category</InputLabel>
                <Select
                    labelId="select-label"
                    id="simple-select"
                    value={category}
                    label={category}
                    onChange={e => handleChange(e)}
                >   
                    <MenuItem value='all'>All</MenuItem>
                    {categories.map((category) => (
                        <MenuItem value={category}>{category}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}