// CSS
import './Pages.css'
// Libery
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
// Componenst
import DetailPage from './pages/DetailPage'
import LandingPages from './pages/LandingPages'
import HomePage from './pages/HomePage'
import ErrorPages from './pages/ErrorPages'
import FormPage from './pages/FormPage'
import { DogState, TemperamentsState } from './utils/ApiState'
import { API_ALL_DOGS, API_TEMPERAMENTS } from './app/features/dogs/dogsSlice'
const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		;(async () => {
			const dogs = await DogState()
			const temperaments = await TemperamentsState()
			if (dogs && temperaments) {
				dispatch(API_ALL_DOGS(dogs))
				dispatch(API_TEMPERAMENTS(temperaments))
			}
		})()
	}, [dispatch])
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPages />} />
				<Route path='/dogs' element={<HomePage />} />
				<Route path='/dogs/:id' element={<DetailPage />} />
				<Route path='/dogs/post' element={<FormPage />} />'
				<Route path='/error' element={<ErrorPages />} />
				<Route path='*' element={<Navigate to='/error' />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
