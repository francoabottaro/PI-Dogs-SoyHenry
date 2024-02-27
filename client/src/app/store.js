import { configureStore } from '@reduxjs/toolkit'
import dogsReducer from './features/dogs/dogsSlice'
import dogReducer from './features/dogs/dogSlice'

const store = configureStore({
	reducer: {
		dogs: dogsReducer,
		dog: dogReducer
	}
})

export default store
