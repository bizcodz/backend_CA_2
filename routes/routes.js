const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  const { email, password } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email cannot be empty' })
  }

  if (!password) {
    return res.status(400).json({ error: 'Password cannot be empty' })
  }

  return res.json({ message: 'Login successful' })
})

module.exports = router
