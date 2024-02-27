function submitForm(form) {
	const regex = {
		errorNotNull: /([A-Z a-z])[\w\s]{1,90}/,
		errorHeight: /(^\d{1,2}\s{1}-\s{1}\d{1,2}$)/,
		errorWeight: /(^\d{1,3}\s{1}-\s{1}\d{1,3}$)/,
		errorLifeSpan: /(^\d{1,2}\s{1}-\s{1}\d{1,2}$)/,
		errorImgUrl:
			/^(http(s)?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
	}
	const {
		name,
		height,
		weight,
		life_span,
		image,
		temperaments,
		arrayValidateTemp
	} = form

	if (!regex.errorNotNull.test(name)) {
		return false
	}
	if (!regex.errorHeight.test(height)) {
		return false
	}
	if (!regex.errorWeight.test(weight)) {
		return false
	}
	if (!regex.errorLifeSpan.test(life_span)) {
		return false
	}
	if (!regex.errorImgUrl.test(image)) {
		return false
	}
	for (let i = 0; i < temperaments.length; i++) {
		if (!arrayValidateTemp.includes(temperaments[i])) {
			return false
		}
	}

	return true
}
const sumitNumber = (number, name) => {
	const regex = {
		heightYears: /^(?!0\d)\d{1,2}(?<!00)$/,
		weight: /^(?!0\d)\d{1,3}(?<!00)$/
	}
	if (
		regex.heightYears.test(number) &&
		(name.includes('life') || name.includes('Height'))
	) {
		return true
	}
	if (regex.weight.test(number) && name.includes('Weight')) {
		return true
	}
}
export { sumitNumber }
export default submitForm
