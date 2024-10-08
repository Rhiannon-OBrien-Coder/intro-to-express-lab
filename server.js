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

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req, res)=>{
    let a = parseInt(req.params.index)
    if (Number.isInteger(a) && a < collectibles.length) {
        res.send(`So, you want the ${collectibles[a].name}? For ${collectibles[a].price}$, it can be yours!`)
    } else {
        res.send(`This item is not yet in stock. Check back soon!`)
    }
})

app.get('/*', (req, res) => {
    res.send({
        error: '404 file note found'
    })
})