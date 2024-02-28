import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Components.css'
const SearchBar = ({ dispatchDogsAll, API_ALL_DOGS, DogState }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const navigate = useNavigate()

	const handleChange = event => {
		setSearchTerm(event.target.value)
	}

	const handleSubmit = event => {
		event.preventDefault()
		if (searchTerm.trim() !== '') {
			navigate(`/dogs?name=${searchTerm.trim()}`)
		}
		if (searchTerm.trim() === '') {
			;(async () => {
				const api = await DogState()
				dispatchDogsAll(API_ALL_DOGS(api))
				navigate('/dogs')
			})()
		}
	}
	return (
		<form onSubmit={handleSubmit} className='search'>
			<input
				type='text'
				placeholder='Search by name...'
				value={searchTerm}
				onChange={handleChange}
			/>
			<button type='submit'>Search</button>
		</form>
	)
}

export default SearchBar
