const getDogs = (req, res) => {
	//*/dog
	const name = req.query.name ?? false;
	const ApiDataDogs = req.dataApi;
	if (!name) {
		return res.json(ApiDataDogs);
	}
	//*/dog?name="..."
	const nameApi = ApiDataDogs.filter(e =>
		e.name.toLowerCase().includes(name.toLowerCase())
	);
	return res.json(nameApi);
};
module.exports = getDogs;
