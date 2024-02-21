// idRaza = id
const getIdRaza = (req, res) => {
	try {
		const idRaza = req.params.idRaza;
		const ApiIdRaza = req.dataApi.find(e => e.id.toString() === idRaza);
		res.json(ApiIdRaza);
	} catch (error) {
		console.log(error);
	}
};
module.exports = getIdRaza;
