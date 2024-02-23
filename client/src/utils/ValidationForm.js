function submitForm(form) {
	const regex = {
		errorNotNull: /([A-Z a-z])[\w\s]{1,90}/,
		errorHeight: /(^\d{1,2}\s{1}-\s{1}\d{1,2}$)/,
		errorWeight: /(^\d{1,3}\s{1}-\s{1}\d{1,3}$)/,
		errorLifeSpan: /(^\d{1,2}\s{1}-\s{1}\d{1,2}$)/
	}
	const { name, height, weight, life_span, temperaments } = form
	const Array = api.map(e => e.name)
	const error = []
	if (!regex.errorNotNull.test(name)) {
		error.push('Error: Invalid name.')
	}
	if (!regex.errorHeight.test(height)) {
		error.push('Error: Invalid height.')
	}
	if (!regex.errorWeight.test(weight)) {
		error.push('Error: Invalid weight')
	}
	if (!regex.errorLifeSpan(life_span)) {
		error.push('Error: Invalid Life Span.')
	}
	for (let i = 0; i < temperaments.length; i++) {
		if (!api.name.includes(temperaments[i])) {
			error.push('Error invalid temperaments')
		}
	}
	return true
}
