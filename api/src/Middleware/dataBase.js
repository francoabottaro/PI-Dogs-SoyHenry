// Internal DataBase
const { Dogs, Temperaments, DogsTemperaments } = require("../db");

const dataBase = async (req, res, next) => {
	try {
		const rowsDogs = await Dogs.findAll();
		const rowsTemp = await Temperaments.findAll();
		const rowsDogsTemp = await DogsTemperaments.findAll();
		req.dataBase = { rowsTemp, rowsDogs, rowsDogsTemp };
		next();
	} catch (error) {
		console.log(error);
	}
};

module.exports = dataBase;
