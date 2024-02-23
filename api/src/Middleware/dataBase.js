// Internal DataBase
const { Dogs, Temperaments, DogsTemperaments } = require("../db");

const dataBase = async (req, res, next) => {
	try {
		const rowsDogs = await Dogs.findAll();
		const rowsTemp = await Temperaments.findAll();
		const rowsDogsTemp = await DogsTemperaments.findAll();
		req.dataBase = { rowsTemp, rowsDogs, rowsDogsTemp };
		const dogsFromDB = await Dogs.findAll({
			include: [{ model: Temperaments }]
		});
		const dogsData = dogsFromDB.map(dog => {
			const { id, name, image, height, weight, life_span, Temperaments } = dog;
			const temperaments = Temperaments.map(temp => temp.name).join(", ");
			return { id, name, image, height, weight, life_span, temperaments };
		});
		// For GET
		const ApiDataDogs = req.dataApi.concat(dogsData);
		req.ApiDataDogs = ApiDataDogs;
		req.dataApi = ApiDataDogs;
		next();
	} catch (error) {
		console.log(error);
	}
};

module.exports = dataBase;
