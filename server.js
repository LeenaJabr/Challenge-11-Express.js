const express = require('express')
const path = require('path')
const colors = require('colors/safe')
colors.enable()

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/notes', require('./routes/api'))
app.use(express.static('public'))

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
)

//GET route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
)

app.listen(PORT, () =>
  console.log(colors.bgGreen(`App started!`), colors.rainbow(`Click --> http://localhost:${PORT}`), `🚀`)
)