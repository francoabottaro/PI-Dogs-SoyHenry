const { Router } = require("express");
const api = require("../Middleware/api");
const apiTemperaments = require("../Middleware/apiTemperaments");
const dataBase = require("../Middleware/dataBase");
const Temperament = require("../Middleware/Temperaments");

// Importar todos los routers;
const router = Router();

// API Extraction
router.use(api);
router.use(apiTemperaments);
// DataBase Extraction
router.use(Temperament);
router.use(dataBase);

module.exports = router;
