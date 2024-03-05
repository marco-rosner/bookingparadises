const data = require('../data/places')

const getPlaces = (req, res) => {
    res.status(200).json(data.places)
    res.end()
}

module.exports = { getPlaces }