const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

const db = require('./helpers/connection')

app.use(express.json())

const PORT = 8000

app.get('/api',(req, res) => {
    res.send('Api testing')
})

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})