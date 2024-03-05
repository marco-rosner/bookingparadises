const data = require('../data/properties')

const getProperties = (req, res) => {
    res.status(200).json(data.properties)
    res.end()
}

module.exports = { getProperties }