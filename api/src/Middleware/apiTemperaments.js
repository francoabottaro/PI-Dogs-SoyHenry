const apiTemperaments = (req, res, next) => {
	try {
		const api = req.dataApi;
		const arrayTemperament = api.map(e => e.temperament); // Array temperaments

		const joinTemperament = arrayTemperament.join(", ").split(", "); // Array string

		const notRepetTemp = joinTemperament
			.sort()
			.filter((item, pos, self) => self.indexOf(item) === pos); //not repeat && alphabetical order

		notRepetTemp[0] === "" && notRepetTemp.shift(); //delete ("")

		const tempApi = notRepetTemp.map((e, i) => ({
			id: i + 1,
			temperament: e
		}));
		// *utils
		req.arrayTemp = notRepetTemp;
		req.tempApi = tempApi;
		next();
	} catch (error) {
		console.log(error);
	}
};
module.exports = apiTemperaments;
