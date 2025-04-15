const express = require('express')
const app = express()
const port = 3000

const loginRoute = require('./routes/routes')

app.use(express.json())
app.use('/login', loginRoute)

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
