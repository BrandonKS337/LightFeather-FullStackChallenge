const express = require("express");
const supervisorsController = require("../Controllers/supervisorsController.js");

const router = express.Router();

router.get("/supervisors", (req, res) => {
  supervisorsController.getSupervisors(req, res);
}); //GET method route

router.post("/submit", (req, res) => {
  supervisorsController.submitNotification(req, res);
}); //POST method route

module.exports = router;
