function errorPost(
	name,
	image,
	height,
	weight,
	life_span,
	temperaments,
	arrayTemp
) {
	const regex = {
		errorNotNull: /([A-Z a-z])[\w\s]{1,90}/,
		errorHeight: /(^\d{1,2}\s{1}-\s{1}\d{1,2}$)/,
		errorWeight: /(^\d{1,3}\s{1}-\s{1}\d{1,3}$)/,
		errorLifeSpan: /(^\d{1,2}\s{1}-\s{1}\d{1,2}$)/,
		errorLifeSpan1: /(^\d{1,2}$)/
	};
	try {
		//temperament
		for (let i = 0; i < temperaments.length; i++) {
			if (!arrayTemp.includes(temperaments[i])) {
				throw new Error("Error invalid temperaments");
			}
		}
		if (temperaments.length === 0) {
			throw new Error("Error invalid temperaments");
		}

		//Dogs
		if (!regex.errorNotNull.test(name)) {
			throw new Error("Error invalid name");
		}

		if (!regex.errorNotNull.test(image)) {
			throw new Error("Error invalid image");
		}

		if (!regex.errorHeight.test(height)) {
			throw new Error("Error invalid height");
		}

		if (!regex.errorWeight.test(weight)) {
			throw new Error("Error invalid weight");
		}

		if (
			!(
				regex.errorLifeSpan.test(life_span) ||
				regex.errorLifeSpan1.test(life_span)
			)
		) {
			throw new Error("Error invalid life_span");
		}

		//No error:
		return true;
	} catch (error) {
		return error.message;
	}
}

module.exports = errorPost;
