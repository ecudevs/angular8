const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

let tareas = require("./constants");

let tareaController = require("./controllers/tareaController");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

// app.get("/", function(req, res) {
//   // dadas
//   res.send("Hola mundo!");
// });

// app.get("/hola/:nombre/:apellido", (req, res) => {
//   console.log(req.query);
//   res.send("Hola mundo! " + req.params.nombre + " " + req.params.apellido);
// });

// app.post("/", (req, res) => {
//   res.send("Hola mundo! por post!" + req.body.nombre);
// });

// app.put("/", (req, res) => {
//   res.send("Hola mundo! por put!");
// });

// TAREAS
app.get("/tareas", (req, res) => {
  tareaController.getTareas(res);
});

app.get("/tareas/:_id", (req, res) => {
  tareaController.getTareaById(res, req.params._id);
});

app.post("/tareas", (req, res) => {
  tareaController.insert(res, req.body);
});

app.put("/tareas", (req, res) => {
  tareaController.update(res, req.body);
});

app.delete("/tareas/:_id", (req, res) => {
  let index = tareas.findIndex(tareaABuscar => {
    return tareaABuscar._id == req.params._id;
  });

  tareas.splice(index, 1);

  res.send({ tareas });
});

app.use(express.static(path.join(__dirname, "../dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

mongoose.connect(
  "mongodb://heroku_lkdpvq3k:8kur5bv4sjgvdeoe3usgpd3aqg@ds133556.mlab.com:33556/heroku_lkdpvq3k",
  {
    useNewUrlParser: true
  }
);

const port = process.env.PORT || "3000";
app.set("port", port);

// creacion de servidor a partir de express
const server = http.createServer(app);

// ponemos a escuchar nuestro servidor
server.listen(port, () => console.log(`Mag Happens on port: ${port}`));
