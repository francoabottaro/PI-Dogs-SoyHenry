const { Router } = require("express");
const api = require("../Middleware/api");
const apiTemperaments = require("../Middleware/apiTemperaments");
const dataBase = require("../Middleware/dataBase");

// Importar todos los routers;

const router = Router();

// API Extraction
router.use(api);
router.use(apiTemperaments);
// DataBase Extraction
router.use(dataBase);

module.exports = router;
