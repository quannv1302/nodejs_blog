const express = require('express')
const app = express()
const port = 3000

//route
app.get('/', (req, res) => {
    res.send('Hello world')
})
app.get('/hello', (req, res) => {
    res.send('Hello quan dep trai')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})