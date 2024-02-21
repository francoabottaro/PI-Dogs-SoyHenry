const { where, Op } = require("sequelize");
const { Temperaments, Dogs } = require("../db");
const getDogs = async (req, res) => {
	//*/dogs
	try {
		const name = req.query.name ?? false;
		const dogsFromDB = await Dogs.findAll({
			include: [{ model: Temperaments }]
		});

		const dogsData = dogsFromDB.map(dog => {
			const { id, name, image, height, weight, life_span, Temperaments } = dog;
			const temperaments = Temperaments.map(temp => temp.name).join(", ");
			return { id, name, image, height, weight, life_span, temperaments };
		});
		const ApiDataDogs = req.dataApi.concat(dogsData);
		if (!name) {
			return res.json(ApiDataDogs);
		}
		//*/dogs?name="..."
		const nameApi = ApiDataDogs.filter(e =>
			e.name.toLowerCase().includes(name.toLowerCase())
		);
		return res.json(nameApi);
	} catch (error) {
		console.log(error);
	}
};
module.exports = getDogs;
