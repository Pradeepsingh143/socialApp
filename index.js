require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

var format = require('date-format');
const date =  format('dd-MM-yyyy : hhh-mmm-sss', new Date());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/api/v1/facebook', (req, res) => {

    const facebookData = {
        username : "pradeep", 
        age : 22,
        follower : 500,
        follow : 100,
        date : date
    }

    res.status(200).json(facebookData)
})

app.get('/api/v1/instagram', (req, res) => {

    const instagramData = {
        username : "pradeep", 
        age : 22,
        follower : 600,
        follow : 200,
        date : date
    }

    res.status(200).json(instagramData)
})

app.get('/api/v1/:token/:name', function (req, res) {
    res.status(200)
    res.json(
        {param : req.params.token, 
        name: req.params.name})
  })

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})