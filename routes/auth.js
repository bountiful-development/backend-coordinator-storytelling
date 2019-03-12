const express = require('express');
const router = express.Router();
const db = require('../data/dbConfig');
const bcrypt = require('bcrypt');

const Users = require('../models/user');

const mdl = require('../extra/middleware');


router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash;
  
    Users.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
router.post('/login', (req, res) => {
    let { username, password } = req.body;
    let secret = 'Coordinate';
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = mdl.generateToken(user); // new
          if(token){
          res.status(200).json({
            message: `Welcome ${user.username}!, have a token...`,
            token,
            secret
          });
        } else {
            res.status(500).json({ msg: 'Could not generate token'});
        }
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error, {message: "OOP"});
      });
});

module.exports = router;