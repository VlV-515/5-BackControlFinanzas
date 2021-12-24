const express = require("express");
const router = express.Router();
const outSchema = require("../models/outModel");
//Crear Salida
router.post("/newOut", (req, res) => {
  outSchema(req.body)
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Obtener todas las salidas
router.get("/getOut", (req, res) => {
  outSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Obtener una unica salida
router.get("/getOut/:id", (req, res) => {
  const { id } = req.params;
  outSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Editar una salia
router.put("/editOut/:id", (req, res) => {
  const { id } = req.params;
  const { quant, description, date } = req.body;
  outSchema
    .updateOne({ _id: id }, { quant, description, date })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Eliminar una salida
router.delete("/deleteOut/:id", (req, res) => {
  const { id } = req.params;
  outSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;