import axios from 'axios'
const API = import.meta.env.VITE_API
async function DogState() {
	try {
		const response = await axios.get(`${API}/dogs`)
		const { data } = response
		return data
	} catch (error) {
		console.error('Error in dogs:', error)
		return false
	}
}
async function cardIdDog(id) {
	try {
		const response = await axios.get(`${API}/dogs/${id}`)
		const { data } = response
		console.log(data)
		return data
	} catch (error) {
		console.error('Error in dogs/:id:', error)
		return false
	}
}
async function DogStateQuery(query) {
	try {
		const response = await axios.get(`${API}/dogs?name=${query}`)
		const { data } = response
		console.log(data)
		return data
	} catch (error) {
		console.error('Error in /dogs?name:', error)
		return false
	}
}
async function TemperamentsState() {
	try {
		const response = await axios.get(`${API}/temperaments`)
		const data = response.data.map(e => e.name)
		return data
	} catch (error) {
		console.error('Error in /temperaments:', error)
		return false
	}
}
async function PostDogs(dogs) {
	try {
		const { name, image, height, weight, life_span, temperaments } = dogs
		const response = await axios.post(`${API}/dogs`, {
			name,
			image,
			height,
			weight,
			life_span,
			temperaments
		})
		console.log(`name:${name},
			image:${image},
			height:${height},
			weight:${weight},
			life_span:${life_span},
			temperaments:${temperaments}`)
		const data = response.data
		console.log('PostDogs response:', data)
		return data
	} catch (error) {
		console.error('Error in post(/dogs):', error)
		return false
	}
}
export { DogState, TemperamentsState, cardIdDog, DogStateQuery, PostDogs }
