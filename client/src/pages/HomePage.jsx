import NavBar from '../components/NavBar'
import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { DogStateQuery, DogState } from '../utils/ApiState'
import { API_ALL_DOGS } from '../app/features/dogs/dogsSlice'
import Order from '../components/Order'
import '../Components.css'

const HomePage = () => {
	const dispatchDogsAll = useDispatch()
	const dogs = useSelector(state => state.dogs.allDogs)
	const [searchParams] = useSearchParams()
	const temperament = searchParams.get('temperament')
	const origin = searchParams.get('origin')
	const nameOrder = searchParams.get('nameOrder')
	const weight = searchParams.get('weight')
	useEffect(() => {
		const fetchData = async () => {
			const name = searchParams.get('name')
			if (name) {
				const dogQuery = await DogStateQuery(name)
				dispatchDogsAll(API_ALL_DOGS(dogQuery))
			}
		}
		fetchData()
	}, [searchParams, dispatchDogsAll, SearchBar])

	return (
		<>
			<NavBar />
			<SearchBar
				dispatchDogsAll={dispatchDogsAll}
				API_ALL_DOGS={API_ALL_DOGS}
				DogState={DogState}
			/>
			<Order
				nameOrder={nameOrder}
				temperament={temperament}
				origin={origin}
				weight={weight}
			/>
			<div className='Cards'>
				{dogs.map(e => (
					<div key={e.id} className='Card'>
						<Card e={e} />
						<Link to={`/dogs/${e.id}`}>Know more</Link>
					</div>
				))}
			</div>
		</>
	)
}

export default HomePage
