const express = require('express')
const db = require('./db')
const cors = require('cors')

const path = require('path')

const app = express()

const PORT = 3000

const clientPath = path.resolve(__dirname, "../client/dist")

app.use(express.static(clientPath))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
})

app.use(express.json())
app.use(cors())
app.get('/api/links', db.getLinks)
app.post('/api/links', db.createLink)
app.post('/api/links/:id', db.updateLink)
app.post('/api/links/:id', db.deleteLink)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})