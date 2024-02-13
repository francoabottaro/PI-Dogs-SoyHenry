require("dotenv").config();
const { API, API_KEY } = process.env;
const axios = require("axios");

const api = async (req, res, next) => {
	try {
		const dogsApi = await axios.get(`${API}?api_key=${API_KEY}`);
		const resDogs = dogsApi.data.map(e => ({
			id: e.id,
			name: e.name,
			image: e.image.url,
			weight: e.weight.metric,
			height: e.height.metric,
			temperament: e.temperament
		}));
		req.dataApi = resDogs;
		next();
	} catch (error) {
		console.log(error);
	}
};
module.exports = api;
