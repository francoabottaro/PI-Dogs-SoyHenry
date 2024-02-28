import { DogState } from './ApiState'
const temperamentos = (api, temp) => {
	let data = api.map(e => {
		if (e.temperament) {
			const temperament = e.temperament.split(',').map(temp => temp.trim())
			e.temperament = temperament
		} else {
			e.temperament = []
		}
		return e
	})
	data = data.filter(e => e.temperament.includes(temp))
	data.forEach(e => {
		const temperament = e.temperament.join(', ')
		e.temperament = temperament
	})
	return data
}
const Ordenamiento = (ordenamieto, order = true, allDogs) => {
	const ordenDogs = [...allDogs]
	if (order) {
		ordenDogs.sort((a, b) => {
			const textA = a.name
			const textB = b.name
			return textA.localeCompare(textB)
		})
	} else {
		ordenDogs.sort((a, b) => {
			const weightA = parseInt(a.weight, 10)
			const weightB = parseInt(b.weight, 10)
			return weightB - weightA
		})
	}
	if (ordenamieto === 'des') {
		ordenDogs.reverse()
	}
	console.log(ordenDogs)

	return ordenDogs
}
const Busqueda = async (origin = '', temperaments = '') => {
	const dogs = { origin, temperaments }
	const dogApi = await DogState()
	let data = dogApi
	if (dogs.origin !== '') {
		if (dogs.origin === 'database') {
			data = data.filter(e => typeof e.id === 'string')
		} else {
			data = data.filter(e => typeof e.id === 'number')
		}
	} else {
		data = dogApi
	}
	if (dogs.temperaments !== '') {
		data = temperamentos(data, dogs.temperaments)
	}

	return data
}

export { Ordenamiento, Busqueda }
