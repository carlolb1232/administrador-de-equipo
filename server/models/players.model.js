const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [
        true,
        "El nombre del jugador es obligatorio"
      ],
      minlength: [
        2,
        "El nombre agregado debe de tener al menos 2 caractéres"
      ],
    },
    prefered_position: {
      type: String,
      default: "",
    },
    game_1: {
      type: String,
      default: "undecided"
    },
    game_2: {
      type: String,
      default: "undecided"
    },
    game_3: {
      type: String,
      default: "undecided"
    }
  },
  {
    timestamps: true
  }
)

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;