import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { API_ID } from '../app/features/dogs/dogsSlice'
import NavBar from '../components/NavBar'
import { cardIdDog } from '../utils/ApiState'
import Card from '../components/Card'
const DetailPage = () => {
	const { id } = useParams()
	const Detaildispatch = useDispatch()
	const e = useSelector(state => state.dogs.idDog)
	useEffect(() => {
		;(async () => {
			const dog = await cardIdDog(id)
			Detaildispatch(API_ID(dog))
		})()
	}, [cardIdDog, id, Detaildispatch])
	return (
		<div>
			<NavBar />
			<Card e={e} />
		</div>
	)
}

export default DetailPage
