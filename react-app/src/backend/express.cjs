const express = require('express');
const cors = require('cors');
const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());

app.get('/api/elements', (req, res) => {

    fetch('https://api.dedolist.com/api/v1/science/periodic-table-detailed/')
    .then(async (response) => {
        const data = await response.json();
        return res.status(200).send(JSON.stringify(data))
    })
    .catch(() => {
        return res.sendStatus(500)
    })
});

app.listen(port, () => {
    console.log('Express backend server is running on port:', port);
})