const express = require('express')
const app = express()
const items = require('./items.json')

app.get('/items', (req, res) => {
    res.json(items.map(item => {
        return {
            id: item.id,
            name: item.name,
            prices: item.priceInCents / 100,
            purchased: false
        }
    }))
})

app.listen(3000)