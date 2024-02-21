const { Temperaments } = require("../db");
const temperamentsDB = async (req, res, next) => {
	// Insert temperaments into database
	try {
		const tempDB = req.tempApi;
		const countTempDB = await Temperaments.count();
		if (countTempDB === 0) {
			await tempDB.map(
				async e => await Temperaments.create({ name: e.temperament })
			);
		}
		next();
	} catch (error) {
		console.log(error);
	}
};
module.exports = temperamentsDB;
