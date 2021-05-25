const router = require('express').Router();
const { Review, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const reviewData = await Review.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const reviews = reviewData.map((review) => review.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        reviews, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  //renders login handlebar  template
    res.render('login');
  });
  
  router.get('/signUp', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  //renders login handlebar  template
    res.render('signUp');
  });
  
  module.exports = router;