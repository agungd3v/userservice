const user = require('../models/User')

const UserController = {
  addToCart: async (req, res) => {
    try {
      const { product, userid } = req.body
      await user.findOne({_id: userid}, (err, scss) => {
        const cart = []
        if (scss.carts.length < 1) {
          scss.carts.push(product)
          scss.save()
          return res.json({status: true, message: scss})
        }
        scss.carts.map(data => {if (data._id != product._id) return cart.push(data)})
        cart.push(product)
        scss.carts = cart
        scss.save()
        return res.json({status: true, message: scss})
      })
    } catch (error) {
      return res.json({
        status: false,
        message: 'Error: ' + error
      })
    }
  }
}

module.exports = UserController