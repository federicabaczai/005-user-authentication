// dependencies 
const express = require('express')
const res = require('express/lib/response')
const { route } = require('express/lib/router')
const mongoose = require('mongoose')

// Get the models
const User = mongoose.model('users')

// create the routes
const router = express.Router()

router.get('/', (req,res) => {
  res.render('homepage')
})

// LOGIN 
router.get('/log-in', (req,res) => {
  res.render('log-in')
})

router.post('/log-in',async (req,res) => {
  console.log(req.body)

  const users = await User.find({
    email: req.body.email,
    password: req.body.password,
  }).lean()
  console.log(users)
  // print a new page, that tells to the user if you are actually logged in or not
  res.render('log-in')
})

// REGISTER 
router.get('/sign-up', (req,res) => {
  res.render('sign-up')
})

router.post('/sign-up', async (req,res) => {
  const newUser = await User.create(req.body)
  res.redirect('/')
})



// export the requests
module.exports = router;