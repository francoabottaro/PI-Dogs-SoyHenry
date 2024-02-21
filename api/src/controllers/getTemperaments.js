const { Temperaments } = require("../db");
const getTemperaments = async (req, res) => {
	const apiTemperament = await Temperaments.findAll();
	res.json(apiTemperament);
};
module.exports = getTemperaments;
