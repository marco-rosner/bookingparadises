const data = require('../data/promotions')

const getPromotions = (req, res) => {
    res.status(200).json(data.promotions)
    res.end()
}

module.exports = { getPromotions }