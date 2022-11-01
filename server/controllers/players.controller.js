const Player = require("../models/players.model")

module.exports.findAllPlayers = (req, res) => {
  Player.find()
    .then((players) => res.json(players))
    .catch(err => res.json(err))
}

module.exports.findOnePlayer = (req, res) => {
  const { id } = req.params
  Player.findOne({_id:id})
    .then(player => res.json(player))
    .catch(err => res.json(err))
}

module.exports.createPlayer = (req, res) => {
  const { body } = req;
  Player.create(body)
    .then(playerCreate => res.json(playerCreate))
    .catch(err => res.json(err))
}

module.exports.updatePlayer = (req, res) => {
  const { id } = req.params;
  const { body } = req;
  Player.findByIdAndUpdate({_id:id}, body, {new: true, runValidators: true})
    .then(playerUpdated => res.json(playerUpdated))
    .catch(err => res.json(err))
}

module.exports.deletePlayer = (req, res) => {
  const { id } = req.params;
  Player.findByIdAndDelete({_id:id})
    .then(deletMessage => res.json(deletMessage))
    .catch(err => res.json(err))
}