// Internal DataBase
const { Dogs, Temperaments, DogsTemperaments } = require("../db");

const dataBase = async (req, res, next) => {
	try {
		const { count: countDogs, rows: rowsDogs } = await Dogs.findAndCountAll();
		const { count: countTemp, rows: rowsTemp } =
			await Temperaments.findAndCountAll();
		const rowsDogsTemp = await DogsTemperaments.findAll();
		if (!(countTemp && countDogs)) {
			next();
		}
		req.dataBase = { rowsTemp, rowsDogs, rowsDogsTemp };
	} catch (error) {
		console.log(error);
	}
};

module.exports = dataBase;
