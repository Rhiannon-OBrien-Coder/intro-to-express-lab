const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`)
})

//prompt 1

app.get('/greetings/:name', (req, res)=>{
    res.send({
        msg: `Hello there, ${req.params.name}!`
    })
})

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

//prompt 2

app.get('/roll/:num', (req, res)=>{
    let a = parseInt(req.params.num)
    if (Number.isInteger(a)) {
        let rndStat = randomNum(0, a)
        res.send(`You rolled a ${rndStat}.`)
    } else {
        res.send(`Error: You must specify a number.`)
    }
})

//prompt 3

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

//prompt 4

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res)=>{
    let a = parseInt(req.query.minprice)
    let z = parseInt(req.query.maxprice)
    let c = req.query.type
    console.log(c)
    if(!Number.isNaN(a)){
        console.log("filter on min")
        let minPriceOutput = shoes.filter((shoe) => shoe.price >= a)
        res.send(minPriceOutput)
    } else if (!Number.isNaN(z)) {
        let maxPriceOutput = shoes.filter((shoe) => shoe.price <= z)
        res.send(maxPriceOutput)
    } else if(typeof c !== 'undefined'){
        let typeOutput = shoes.filter((shoe) => shoe.type === c)
        res.send(typeOutput)
    } else{
        res.send(shoes)}
})



//catchall below

app.get('/*', (req, res) => {
    res.send({
        error: '404 file note found'
    })
})