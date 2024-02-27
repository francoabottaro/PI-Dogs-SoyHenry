import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	name: '',
	image: '',
	height: '',
	weight: '',
	life_span: '',
	temperaments: []
}

export const dogSlice = createSlice({
	name: 'dog',
	initialState,
	reducers: {
		DOG: (state, actions) => {
			const { name, image, height, weight, life_span, temperaments } =
				actions.payload
			state.name = name
			state.image = image
			state.weight = weight
			state.height = height
			state.life_span = life_span
			state.temperaments = temperaments
		}
	}
})
export const { DOG } = dogSlice.actions
export default dogSlice.reducer
