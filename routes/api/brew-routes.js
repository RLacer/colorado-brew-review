const router = require('express').Router();
const { Brew } = require('../../models');

router.get('/', (req, res) => {
    Brew.findAll({
        where: {
            city: req.body.city
        }
    })
    .then(dbCityData => {
        console.log(dbCityData);
    })
})

module.exports = router;