import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Card = ({ e }) => {
	let idDogs = useParams()
	idDogs = idDogs.id
	const [id, setId] = useState(undefined)
	useEffect(() => {
		setId(idDogs)
	}, [idDogs, id])
	return (
		<div className='Dog-card'>
			{id !== undefined && <h3>id: {e.id}</h3>}
			<img src={e.image} alt='image not fould' />
			<h2>
				Name: <span>{e.name}.</span>
			</h2>
			{id !== undefined && <h3>Height: {e.height}</h3>}
			<h3>Weight: {e.weight}</h3>
			{id !== undefined && <h3>Life Span: {e.life_span}</h3>}
			<h3>Temperament: {e.temperament || e.temperaments}</h3>
		</div>
	)
}

export default Card
