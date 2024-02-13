const { Router } = require("express");
const api = require("../Middleware/api");
const dataBase = require("../Middleware/dataBase");

// Importar todos los routers;

const router = Router();

// API Extraction
router.use(api);
// DataBase Extraction
router.use(dataBase);

module.exports = router;
