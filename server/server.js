const express = require("express")
const cors = require('cors')
const { getPlaces } = require("./handlers/getPlaces")
const { getPromotions } = require("./handlers/getPromotions")
const { getProperties } = require("./handlers/getProperties")

const PORT = 8080

const startExpressServer = async () => {
    const app = express()

    app.use(express.json())
    app.use(cors())

    app.get("/places", getPlaces)
    app.get("/promotions", getPromotions)
    app.get("/properties", getProperties)

    app.listen({ port: PORT }, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`)
    })
}

startExpressServer()