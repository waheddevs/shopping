// NodeJS  EXPRESS NESTJS
// PYTHON  DJANGO FastAPI

const express = require('express')
const app = express()

// Traditional API
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

// Rest API
app.get('/rest', (req, res) => {
  res.json({name: 'ARNOLD', age: 25, group: 'MIT 40'})
})

app.listen(3000, () => {
  console.log(`Backend server is running on port 3000`)
})
