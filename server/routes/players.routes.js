const PlayerController = require("../controllers/players.controller");

module.exports = (app) => {
  app.get("/api/players", PlayerController.findAllPlayers);
  app.get("/api/players/:id", PlayerController.findOnePlayer);
  app.post("/api/players/", PlayerController.createPlayer);
  app.put("/api/players/:id", PlayerController.updatePlayer);
  app.delete("/api/players/:id", PlayerController.deletePlayer);
}