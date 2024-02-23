// CSS
import './Pages.css'
// Libery
import { useEffect, useState } from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// Componenst
import LandingPages from './pages/LandingPages'
import HomePage from './pages/HomePage'
import ErrorPages from './pages/ErrorPages'
function App() {
	console.log(useSelector(state => state.apiDogs))
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<LandingPages />} />
				<Route path='/dogs' element={<HomePage />} />
				<Route path='/error' element={<ErrorPages />} />
				<Route path='*' element={<Navigate to='/error' />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
