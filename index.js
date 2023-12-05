const express = require("express")

const app = express()

const port = 3000


app.get('/', (req, res) => {
  res.send("Hello World! We're live on our first server!")
})

app.listen(port, () => {
  console.log(`Our app is listening on port ${port}`)
})

app.get('/test', (req, res) => {
  res.send('<html> <body> <h1> Testing Sending HTML </h1> </body> </html>')
})