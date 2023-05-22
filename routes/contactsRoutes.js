const express = require('express')

const router = express.Router()

router.route('/').get((req, res) => {
  res.json({ message: 'I am here and all contacts is here....' })
})

router.route('/:id').post((req, res) => {
  res.send({ message: `successfully create the id of ${req.params.id}` })
})

router.route('/contact').get((req, res) => {
  res.send({
    message: 'This is your contact number and thanks for your search',
  })
})

router.route('/:id').delete((req, res) => {
  res.send(`Successfully delete the id of ${req.params.id}`)
})
module.exports = router
