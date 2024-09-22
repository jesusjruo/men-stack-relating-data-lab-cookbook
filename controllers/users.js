// controllers/foods.js

const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// router logic will go here - will be built later on in the lab

router.get('/', async (req, res) => {
    try {
        const allUser = await User.find({});
        res.render('users/index.ejs', {
          people: allUser,
        });
    } catch (error) {
    console.log(error)
    res.redirect('/')
    }
});

router.get('/show/:userId', async (req, res) => {
  try {
      const allUserPantries = await User.findById(req.params.userId);
      res.render('users/show.ejs', {
        data: allUserPantries,
      });
  } catch (error) {
  console.log(error)
  res.redirect('/')
  }
});

module.exports = router;
