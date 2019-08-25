const Tarea = require("../models/Tarea");

const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

function tareaController() {
  this.getTareas = function(res) {
    Tarea.find()
      .then(tareas => {
        res.send({ tareas });
        console.log(1);
      })
      .catch(error => {
        res.status(500).send({ error });
      });

    console.log(2);
  };

  this.getTareaById = async function(res, _id) {
    try {
      console.log(1);
      let tarea = await Tarea.findById(ObjectId(_id));
      console.log(2);
      res.send({ tarea });
    } catch (error) {
      res.status(500).send({ error });
    }
  };

  this.insert = async function(res, tarea) {
    try {
      let tareaAGuardar = new Tarea(tarea);
      await tareaAGuardar.save();
      let tareas = await Tarea.find();
      res.send({ tareas });
    } catch (error) {
      res.status(500).send({ error });
    }
  };

  this.update = async function(res, tarea) {
    try {
      await Tarea.findByIdAndUpdate(ObjectId(tarea._id), tarea);
      let tareas = await Tarea.find();
      res.send({ tareas });
    } catch (error) {
      res.status(500).send({ error });
    }
  };
}

module.exports = new tareaController();
