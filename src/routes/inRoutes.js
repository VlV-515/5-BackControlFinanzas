const express = require("express");
const router = express.Router();
const inSchema = require("../models/inModel");
//crear entrada
router.post("/newIn", (req, res) => {
  inSchema(req.body)
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Retorna todas las entradas
router.get("/getIn", (req, res) => {
  inSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Retorna una entrada en especifico
router.get("/getIn/:id", (req, res) => {
  const { id } = req.params;
  inSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Edita una entrada
router.put("/editIn/:id", (req, res) => {
  const { id } = req.params;
  const { quant, description, date } = req.body;
  inSchema
    .updateOne({ _id: id }, { quant, description, date })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Edita una entrada
router.delete("/deleteIn/:id", (req, res) => {
  const { id } = req.params;
  inSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
