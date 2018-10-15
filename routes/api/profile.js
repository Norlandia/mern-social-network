const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

//Load Profile model
const Profile = require('../../modules/Profile');
//Load User model
const User = require('../../modules/User');

//@route GET api/profile/test
//@desc Tests profile route
//@access Public
router.get('/test', (req, res) =>
  res.json({
    msg: 'Profile Works',
  })
);

//@route GET api/profile
//@desc Get current users profile
//@access Private

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .then((profile) => {
        if (!profile) {
          errors.noprofile = 'There is no Profile for this user!';
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch((error) => res.status(404).json(error));
  }
);

module.exports = router;
