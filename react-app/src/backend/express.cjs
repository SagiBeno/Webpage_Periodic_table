const express = require('express');
const cors = require('cors');
const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.get('/api/elements', (req, res) => {

    const categoryColors = {
        'diatomic nonmetal': '#4caf50',
        'noble gas': '#00bcd4',
        'alkali metal': '#ff9800',
        'alkaline earth metal': '#cddc39',
        'metalloid': '#9c27b0',
        'polyatomic nonmetal': '#8bc34a',
        'post-transition metal': '#795548',
        'transition metal': '#2196f3',
        'lanthanide': '#3f51b5',
        'actinide': '#673ab7',
        'unknown, probably transition metal': '#9e9e9e',
        'unknown, probably post-transition metal': '#9e9e9e',
        'unknown, probably metalloid': '#9e9e9e',
        'unknown, predicted to be noble gas': '#9e9e9e',
        'unknown, but predicted to be an alkali metal': '#9e9e9e'
    };

    fetch('https://api.dedolist.com/api/v1/science/periodic-table-detailed/')
    .then(async (response) => {
        const data = await response.json();
        const dataWithColor = data.map(element => ({
            ...element,
            color: categoryColors[element.category] || '#BBBBBB'
        }));
        return res.status(200).json(dataWithColor);
    })
    .catch(() => {
        return res.sendStatus(500);
    })
});

app.listen(port, () => {
    console.log('Express backend server is running on port:', port);
})