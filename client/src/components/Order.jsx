import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	API_ALL_DOGS,
	ORDER_ORIGIN,
	ORDER_APHE,
	ORDER_WEIGHT,
	ORDER_TEMPERAMENT
} from '../app/features/dogs/dogsSlice'
import { DogState } from '../utils/ApiState'
import { Ordenamiento, Busqueda } from '../utils/RedirectionOrder'

const Order = ({ nameOrder, temperament, origin, weight }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const [ordenar, setOrdenar] = useState(true)
	const [ordenados, setOrdenados] = useState([])
	const [busqueda, setBusqueda] = useState([])
	const [apiState, setApiState] = useState([])
	const { temperaments, allDogs } = useSelector(state => state.dogs)
	const {
		origin: originState,
		orderAlpha,
		ordenWeight,
		temperament: temperamentState
	} = useSelector(state => state.dogs.order)
	useEffect(() => {
		;(async () => {
			const api = await DogState()
			setApiState(api)
		})()
	}, [])

	const handleTemperamentChange = async temperamentUnique => {
		if (temperamentUnique == '') {
			dispatch(ORDER_TEMPERAMENT(temperamentUnique))
			dispatch(API_ALL_DOGS(await apiState))
		} else {
			const bus = await Busqueda(originState, temperamentUnique, apiState)
			dispatch(ORDER_TEMPERAMENT(temperamentUnique))
			dispatch(API_ALL_DOGS(await bus))
			setApiState(await bus)
		}
	}

	const handleOriginChange = async selectedOrigin => {
		if (selectedOrigin == '') {
			dispatch(ORDER_ORIGIN(selectedOrigin))
			dispatch(API_ALL_DOGS(await apiState))
		} else {
			const bus = await Busqueda(selectedOrigin, temperamentState)
			dispatch(ORDER_ORIGIN(selectedOrigin))
			dispatch(API_ALL_DOGS(await bus))
		}
	}

	const handleOrderAlphaChange = async selectedOrderAlpha => {
		// Aquí puedes establecer el estado de orden alfabético
		setOrdenar(true)
		if (selectedOrderAlpha !== 'name') {
			const order = await Ordenamiento(
				selectedOrderAlpha,
				ordenar,
				await apiState
			)
			dispatch(ORDER_APHE(selectedOrderAlpha))
			dispatch(API_ALL_DOGS(await order))
		} else {
			dispatch(ORDER_APHE(selectedOrderAlpha))
			dispatch(API_ALL_DOGS(await apiState))
		}
	}

	const handleOrdenWeightChange = async selectedOrdenWeight => {
		// Aquí puedes establecer el estado de orden por peso
		setOrdenar(false)
		if (selectedOrdenWeight !== 'weight') {
			const order = await Ordenamiento(
				selectedOrdenWeight,
				ordenar,
				await apiState
			)
			dispatch(ORDER_WEIGHT(selectedOrdenWeight))
			dispatch(API_ALL_DOGS(await order))
		} else {
			dispatch(ORDER_WEIGHT(selectedOrdenWeight))
			dispatch(API_ALL_DOGS(await apiState))
		}
	}

	return (
		<div className='order-by'>
			<select
				value={temperamentState}
				onChange={e => handleTemperamentChange(e.target.value)}
			>
				<option key='x' value=''>
					Temperament:
				</option>
				{temperaments.map((e, i) => (
					<option key={i} value={e}>
						{e}
					</option>
				))}
			</select>
			<select
				value={originState}
				onChange={e => handleOriginChange(e.target.value)}
			>
				<option key='x' value=''>
					Origin
				</option>
				<option value='api'>API</option>
				<option value='database'>Data Base</option>
			</select>
			<select
				value={orderAlpha}
				onChange={e => handleOrderAlphaChange(e.target.value)}
			>
				<option value='name'>Name</option>
				<option value='asc'>Asc</option>
				<option value='des'>Des</option>
			</select>

			<select
				value={ordenWeight}
				onChange={e => handleOrdenWeightChange(e.target.value)}
			>
				<option value='weight'>Weight</option>
				<option value='asc'>Asc</option>
				<option value='des'>Des</option>
			</select>
		</div>
	)
}

export default Order
