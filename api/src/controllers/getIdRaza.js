// idRaza = name
const getIdRaza = (req, res) => {
	try {
		const idRaza = req.params.idRaza.toLowerCase();
		const ApiIdRaza = req.dataApi.find(e =>
			e.name.toLowerCase().includes(idRaza)
		);
		res.json(ApiIdRaza);
	} catch (error) {
		console.log(error);
	}
};
module.exports = getIdRaza;
