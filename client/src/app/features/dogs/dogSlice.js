import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	id,
	name,
	image,
	weight,
	height,
	temperament
}

export const dogSlice = createSlice({
	name: 'dog',
	initialState,
	reducers: {
		POST_DOG: (state, actions) => {
			const { name, image, weight, height, temperament } = actions.payload
			state.name = name
			state.image = image
			state.weight = weight
			state.height = height
			state.temperament = temperament
		},
		GET_DOG_NAME: (state, actions) => {
			const { name } = actions.payload
		},
		GET_DOG_ID: (state, actions) => {
			const { id } = actions.payload
		}
	}
})
export const { POST_DOG, GET_DOG_NAME, GET_DOG_ID } = dogSlice.actions
export default dogSlice.reducer
