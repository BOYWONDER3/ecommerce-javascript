const express = require('express')
const app = express()
const cors = require('cors')
const items = require('./items.json')

app.use(cors({
    origin: "http://localhost:1234",
}))

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