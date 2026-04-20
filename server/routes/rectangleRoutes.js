const express = require("express");
const router = express.Router();

const controller = require("../controllers/rectangleController");

// CREATE
router.post("/calculate", controller.calculateRectangle);

// READ
router.get("/history", controller.getHistory);

// DELETE ALL
router.delete("/history", controller.clearHistory);

// DELETE ONE
router.delete("/history/:id", controller.deleteOne);

module.exports = router;