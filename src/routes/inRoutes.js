//Variables
const express = require("express");
const router = express.Router();
const inSchema = require("../models/inModel");
//Nueva entrada
router.post("/newIn", (req, res) => {
  inSchema(req.body)
    .save()
    .then(() => res.json({ msg: "ok" }))
    .catch(() => res.json({ msg: "error" }));
});
//Obtiene todas las entradas
router.get("/getIn", (req, res) => {
  inSchema
    .find()
    .then((data) => res.json(data))
    .catch(() => res.json({ msg: "error" }));
});
//Obtiene una entrada en especifico
router.get("/getIn/:id", (req, res) => {
  const { id } = req.params;
  inSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch(() => res.json({ msg: "error" }));
});
//Edita una entrada
router.put("/editIn/:id", (req, res) => {
  const { id } = req.params;
  const { quant, description, date } = req.body;
  inSchema
    .updateOne({ _id: id }, { quant, description, date })
    .then(() => res.json({ msg: "ok" }))
    .catch(() => res.json({ msg: "error" }));
});
//Elimina una entrada
router.delete("/deleteIn/:id", (req, res) => {
  const { id } = req.params;
  inSchema
    .remove({ _id: id })
    .then(() => res.json({ msg: "ok" }))
    .catch(() => res.json({ msg: "error" }));
});
module.exports = router;
