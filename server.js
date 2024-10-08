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

app.get('/message/:id', (req, res)=>{
    console.log(`message id of ${req.params.id}`)
    res.send({
        msg: `id of ${req.params.id}`
    })
})