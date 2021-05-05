const auth = (req, res, next) => {
  const { headers } = req

  if (headers.authorization !== 'Bearer 1234') {
    res.status(401).json({ error: 'Invalid token' })
  }

  req.user = 'admin'

  next()
}

module.exports = auth