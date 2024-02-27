import React, { useEffect } from 'react'
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

const Order = ({ nameOrder, temperament, origin, weight }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { temperaments, allDogs } = useSelector(state => state.dogs)
	const {
		origin: originState,
		orderAlpha,
		ordenWeight,
		temperament: temperamentState
	} = useSelector(state => state.dogs.order)

	// Efecto para manejar cambios en los parámetros de consulta
	useEffect(() => {
		if (temperamentState) {
			dispatch(ORDER_TEMPERAMENT(temperamentState))
			console.log(temperamentState)
		}
		if (originState) {
			// Aquí puedes realizar el despacho de la acción correspondiente para ordenar por origen
			dispatch(ORDER_ORIGIN(originState))
			console.log(originState)
		}
		if (orderAlpha) {
			// Aquí puedes realizar el despacho de la acción correspondiente para ordenar por nombre
			dispatch(ORDER_APHE(orderAlpha))
			console.log(orderAlpha)
		}
		if (ordenWeight) {
			// Aquí puedes realizar el despacho de la acción correspondiente para ordenar por peso
			dispatch(ORDER_WEIGHT(ordenWeight))
			console.log(ordenWeight)
		}
	}, [orderAlpha, temperamentState, originState, ordenWeight])

	// Manejadores de eventos para cambios en los selectores
	const handleTemperamentChange = temperamentUnique => {
		// Aquí puedes despachar una acción para ordenar por temperamento
		dispatch(ORDER_TEMPERAMENT(temperamentUnique))
		console.log(temperamentState)
	}

	const handleOriginChange = selectedOrigin => {
		// Aquí puedes establecer el estado de origen
		dispatch(ORDER_ORIGIN(selectedOrigin))
	}

	const handleOrderAlphaChange = selectedOrderAlpha => {
		// Aquí puedes establecer el estado de orden alfabético
		dispatch(ORDER_APHE(selectedOrderAlpha))
	}

	const handleOrdenWeightChange = selectedOrdenWeight => {
		// Aquí puedes establecer el estado de orden por peso
		dispatch(ORDER_WEIGHT(selectedOrdenWeight))
	}

	return (
		<div>
			<select
				value={temperamentState}
				onChange={e => handleTemperamentChange(e.target.value)}
			>
				<option value=''>Temperament</option>
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
				<option value=''>Origin</option>
				<option value='api'>API</option>
				<option value='database'>Data Base</option>
			</select>
			<select
				value={orderAlpha}
				onChange={e => handleOrderAlphaChange(e.target.value)}
			>
				<option value=''>Name</option>
				<option value='asc'>Asc</option>
				<option value='des'>Des</option>
			</select>
			<label>
				<select
					value={ordenWeight}
					onChange={e => handleOrdenWeightChange(e.target.value)}
				>
					<option value=''>Weight</option>
					<option value='asc'>Asc</option>
					<option value='des'>Des</option>
				</select>
			</label>
		</div>
	)
}

export default Order
