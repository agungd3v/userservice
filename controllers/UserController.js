const UserController = {
  addToCart: (req, res) => {
    const { product, userid } = req.body
    try {
      const userData = user.updateOne({ _id: userid }, {
        $push: { carts: product }
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