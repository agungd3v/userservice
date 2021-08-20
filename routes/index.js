const route = require('express').Router()

const user = require("../controllers/UserController")

route.post('/addtocart', user.addToCart)

module.exports = route