const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/team_manager_db`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(()=>console.log("La base de datos ha sido conectada exitosamente"))
  .catch(err=>console.log(`Error detectado ➡`, err));
