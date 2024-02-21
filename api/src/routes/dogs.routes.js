const { Router } = require("express");

// Import HTTP dogs
const getDogs = require("../controllers/getDogs");
const getIdRaza = require("../controllers/getIdRaza");
const postDogs = require("../controllers/postDogs");

// HTTP Method
const dogsRoutes = Router();
dogsRoutes.get("/dogs", getDogs);
dogsRoutes.get("/dogs/:idRaza", getIdRaza);
dogsRoutes.post("/dogs", postDogs);

module.exports = dogsRoutes;
