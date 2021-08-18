require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')

const MainRouter = require('./routes/main')

const PORT = process.env.PORT || 3000
app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
    //req.headers['authorization']
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})
//API
app.use(MainRouter)

module.exports = app