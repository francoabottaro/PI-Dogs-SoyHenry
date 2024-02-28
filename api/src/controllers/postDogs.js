const errorPost = require("../utils/error");
const { Dogs, Temperaments, DogsTemperaments } = require("../db");
const UUID = require("../utils/createId");
const { Op } = require("sequelize");

const postDogs = async (req, res) => {
	try {
		const { name, image, height, weight, life_span, temperament } = req.body;
		let temperamentsUnique = new Set(temperament);
		temperamentsUnique = Array.from(temperamentsUnique);
		const valid = await errorPost(
			name,
			image,
			height,
			weight,
			life_span,
			temperamentsUnique,
			req.arrayTemp
		);

		if (typeof valid === "string") {
			throw new Error(valid);
		}
		const dogsDB = await Dogs.create({
			id: UUID(),
			name,
			image,
			height,
			weight,
			life_span: `${life_span} years`
		});
		const temperamentsDB = await Temperaments.findAll({
			where: {
				name: { [Op.in]: temperamentsUnique }
			}
		});
		await dogsDB.setTemperaments(temperamentsDB);
		res.status(202).send("Successful upload");
	} catch (error) {
		res.status(404);
		res.json({ error: error.message, status: 404 });
	}
};
module.exports = postDogs;
