const express = require("express");
const app = express();
const port = 8000;

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./server/config/mongoose.config");
require("./server/routes/players.routes")(app);

app.listen(port, ()=>{
  console.log(`El servidor, conectado en el puerto : ${port}`)
});