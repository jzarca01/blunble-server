exports.twitter = (req, res) => {
  const { user } = req
  const io = req.app.get('io')
  const infos = {
    user: {
      name: user.username,
      photo: user.photos[0].value.replace(/_normal/, ''),
    },
    session: req.query
  }
  io.in(req.session.socketId).emit('twitter', infos)
  res.end()
}
