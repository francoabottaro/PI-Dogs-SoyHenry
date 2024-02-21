const apiTemperaments = (req, res, next) => {
	const api = req.dataApi;
	const arrayTemperament = api.map(e => e.temperament);
	const joinTemperament = arrayTemperament.join(", ").split(", "); //
	const notRepetTemp = joinTemperament
		.sort()
		.filter((item, pos, self) => self.indexOf(item) === pos); //not repeat && alphabetical order
	notRepetTemp.shift(); //delete ("")

	console.log(notRepetTemp);
};
module.exports = apiTemperaments;
