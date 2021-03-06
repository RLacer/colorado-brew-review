const router = require('express').Router();
const { Review, User } = require('../models');
const withAuth = require('../utils/auth');
// const { post } = require('./homeRoutes');

router.get('./profile', withAuth, (req, res) => {
    Review.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
    .then(dbReviewData => {
        const reviews = dbReviewData.map(review => post.get({ plain:true }))

        res.render("profile", {
            layout: "main",
              reviews 
           })
        // res.render("profile", {
        //  layout: "main",
        //    reviews,
        //    view: "profile",
            
        // })
    }) 
    .catch (err => {
        console.log(err)
        res.redirect('login')
    })

})

router.get('/new', withAuth, (req, res) => {
    res.render('new-post', { layout: 'main'})
})

module.exports = router;