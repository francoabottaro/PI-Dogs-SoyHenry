import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	allDogs: [],
	idDog: {},
	order: {
		origin: '',
		orderAlpha: '',
		ordenWeight: '',
		temperament: ''
	},
	temperaments: [],
	isLoading: false
}

const dogsSlice = createSlice({
	name: 'dogs',
	initialState,
	reducers: {
		API_ALL_DOGS: (state, actions) => {
			state.allDogs = actions.payload
		},
		API_TEMPERAMENTS: (state, actions) => {
			state.temperaments = actions.payload
		},
		API_ID: (state, actions) => {
			state.idDog = actions.payload
		},
		ORDER_ORIGIN: (state, actions) => {
			state.order.origin = actions.payload
		},
		ORDER_APHE: (state, actions) => {
			state.order.orderAlpha = actions.payload
		},
		ORDER_WEIGHT: (state, actions) => {
			state.order.ordenWeight = actions.payload
		},
		ORDER_TEMPERAMENT: (state, actions) => {
			state.order.temperament = actions.payload
		}
	}
})

export const {
	API_ALL_DOGS,
	API_TEMPERAMENTS,
	API_ID,
	ORDER_APHE,
	ORDER_ORIGIN,
	ORDER_WEIGHT,
	ORDER_TEMPERAMENT
} = dogsSlice.actions
export default dogsSlice.reducer
