const apiTemperament = require("./apiTemperaments"); //API GET
const temperamentDB = require("./temperaments.DB"); //Insert into DB
const { Router } = require("express");

const Temperament = Router();

Temperament.use(apiTemperament);
Temperament.use(temperamentDB);

module.exports = Temperament;
