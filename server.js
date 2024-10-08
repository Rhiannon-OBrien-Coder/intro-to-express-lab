const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`)
})

app.get('/greetings/:name', (req, res)=>{
    res.send({
        msg: `Hello there, ${req.params.name}!`
    })
})

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

app.get('/roll/:num', (req, res)=>{
    let a = parseInt(req.params.num)
    if (Number.isInteger(a)) {
        let rndStat = randomNum(0, a)
        res.send(`You rolled a ${rndStat}.`)
    } else {
        res.send(`Error: You must specify a number.`)
    }
})

app.get('/*', (req, res) => {
    res.send({
        error: '404 file note found'
    })
})