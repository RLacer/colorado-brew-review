const router = require('express').Router();
const { User, Review, } = require('../../models');
const withAuth = require('../../utils/auth');

router.post("/", withAuth, (req, res) => {
    const body = req.body;

    Review.create({ ...body, user_id: req.session.user_id })
    .then(newReview => res.json(newReview))
    .catch(err => res.status(500).json(err))
})

router.delete("/:id", withAuth, (req, res) => {
    Review.destroy({
       where: {
           id: req.params.id
       } 
    })
    .then(affectedRows => {
        if(affectedRows > 0) {
            res.status(200).end();   
        } else {
            res.status(404).end();
        }
       
    })
    .catch(err => res.status(500).json(err));
})

module.exports = router;