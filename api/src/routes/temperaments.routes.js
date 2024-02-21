const { Router } = require("express");
const getTemperaments = require("../controllers/getTemperaments");

//HTTP GET
temperamentRoutes = Router();
temperamentRoutes.get("/temperaments", getTemperaments);

module.exports = temperamentRoutes;
