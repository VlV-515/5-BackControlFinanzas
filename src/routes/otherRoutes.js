const express = require("express");
const router = express.Router();
const otherSchema = require("../models/otherModel");
//Nuevo Other
router.post("/newOther", (req, res) => {
  otherSchema(req.body)
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Obtener todos los Other
router.get("/getOther", (req, res) => {
  otherSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Obtener un other en especifico
router.get("/getOther/:id", (req, res) => {
  const { id } = req.params;
  otherSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ messaage: error }));
});
//Editar un other
router.put("/editOther/:id", (req, res) => {
  const { id } = req.params;
  const { quant, description, date } = req.body;
  otherSchema
    .updateOne({ _id: id }, { quant, description, date })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
//Eliminar un other
router.delete("/deleteOther/:id", (req, res) => {
  const { id } = req.params;
  otherSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = router;