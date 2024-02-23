const { where, Op } = require("sequelize");
const { Temperaments, Dogs } = require("../db");
const getDogs = async (req, res) => {
	//*/dogs
	try {
		const name = req.query.name ?? false;
		const { ApiDataDogs } = req;
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
