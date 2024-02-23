import { configureStore } from '@reduxjs/toolkit'
import dogSlice from './dogs/dogSlice' //type: array
import dogsSlice from './dogs/dogsSlice' //type: object

const store = configureStore({
	reducer: {
		dogSlice,
		dogsSlice
	}
})
// dispach():
// const API = import.meta.env.VITE_API
export default store
