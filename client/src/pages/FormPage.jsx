import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { PostDogs } from '../utils/ApiState.js'
import { DOG } from '../app/features/dogs/dogSlice'
import submitForm, { sumitNumber } from '../utils/ValidationForm.js'
const FormPage = () => {
	const [dog, setDog] = useState({
		name: '',
		image: '',
		height: '',
		weight: '',
		life_span: '',
		temperaments: []
	})
	const [submit, setSubmit] = useState(false)
	const [height, setHeight] = useState({
		minHeight: 0,
		maxHeight: 0
	})

	const [weight, setWeight] = useState({
		minWeight: 0,
		maxWeight: 0
	})

	const [life_span, setLifeSpan] = useState({
		lifemin: 0,
		lifemax: 0
	})

	const [temperament, setTemperament] = useState('')
	const temperaments = useSelector(state => state.dogs.temperaments)
	const form = useSelector(actions => actions.dog)
	const dispatchForm = useDispatch()
	const navigate = useNavigate()

	const handleChange = e => {
		const { name, value } = e.target
		setDog(prevState => {
			return { ...prevState, [name]: value }
		})
		console.log(dog)
	}

	const handleChangeHeight = e => {
		e.preventDefault()
		const { name, value } = e.target
		const nameString = `${name}`
		if (sumitNumber(value, nameString)) {
			const newHeight = { ...height, [name]: value }
			setHeight(newHeight)
			setDog(prevState => ({
				...prevState,
				height: `${newHeight.minHeight} - ${newHeight.maxHeight}`
			}))
		} else {
			if (value <= 0) {
				const newHeight = { ...height, [name]: 0 }
				setHeight(newHeight)
				setDog(prevState => ({
					...prevState,
					height: `${newHeight.minHeight} - ${newHeight.maxHeight}`
				}))
			}
		}
	}

	const handleChangeWeight = e => {
		e.preventDefault()
		const { name, value } = e.target
		const nameString = `${name}`
		console.log(nameString)
		if (sumitNumber(value, nameString)) {
			const newWeight = { ...weight, [name]: value }
			setWeight(newWeight)
			setDog(prevState => ({
				...prevState,
				weight: `${newWeight.minWeight} - ${newWeight.maxWeight}`
			}))
		} else {
			if (value <= 0) {
				const newWeight = { ...weight, [name]: 0 }
				setWeight(newWeight)
				setDog(prevState => ({
					...prevState,
					weight: `${newWeight.minWeight} - ${newWeight.maxWeight}`
				}))
			}
		}
	}

	const handleChangeLifeSpan = e => {
		e.preventDefault()
		const { name, value } = e.target
		const nameString = `${name}`
		if (sumitNumber(value, nameString)) {
			const newLifeSpan = { ...life_span, [name]: value }
			setLifeSpan(newLifeSpan)
			setDog(prevState => ({
				...prevState,
				life_span: `${newLifeSpan.lifemin} - ${newLifeSpan.lifemax}`
			}))
		} else {
			if (value <= 0) {
				const newLifeSpan = { ...life_span, [name]: 0 }
				setLifeSpan(newLifeSpan)
				setDog(prevState => ({
					...prevState,
					life_span: `${newLifeSpan.lifemin} - ${newLifeSpan.lifemax}`
				}))
			}
		}
	}
	const handleTemperaments = e => {
		const { value } = e.target
		setTemperament(value)
	}

	const handleSubmitTemperaments = e => {
		e.preventDefault()
		if (temperament.trim() !== '') {
			setDog(prevDog => ({
				...prevDog,
				temperaments: [...prevDog.temperaments, temperament]
			}))
			setTemperament('')
		}
	}

	const handleDelete = index => {
		setDog(prevDog => ({
			...prevDog,
			temperaments: prevDog.temperaments.filter((_, i) => i !== index)
		}))
	}
	const onSubmit = e => {
		e.preventDefault()
		setSubmit(
			submitForm({
				name: dog.name,
				height: dog.height,
				weight: dog.weight,
				life_span: dog.life_span,
				image: dog.image,
				temperaments: dog.temperaments,
				arrayValidateTemp: temperaments
			})
		)
	}
	useEffect(() => {
		if (!submit) {
			return
		}
		console.log(dog)
		dispatchForm(DOG(dog))
		;(async () => {
			try {
				const response = await PostDogs(form)
				console.log('Response from server:', response)
				navigate('/dogs')
			} catch (error) {
				console.error('Error sending POST request:', error)
			}
		})()
	}, [submit, navigate])
	return (
		<>
			<NavBar />
			<div>
				<h1>
					From Create <span>Dog</span>
				</h1>
				<form onSubmit={handleSubmitTemperaments}>
					<div>
						<label>Name:</label>
						<input
							className='input'
							placeholder='Dog'
							type='text'
							name='name'
							onChange={handleChange}
						/>
					</div>
					<div>
						<label>Image:</label>
						<input
							className='input'
							placeholder='Image'
							type='text'
							name='image'
							onChange={handleChange}
							alt='Not found'
						/>
					</div>

					<div>
						<label>Height:</label>
						<input
							className='input'
							placeholder='cm'
							value={height.minHeight}
							type='number'
							onChange={handleChangeHeight}
							name='minHeight'
							min={0}
						/>
						<input
							className='input'
							placeholder='cm'
							value={height.maxHeight}
							type='number'
							onChange={handleChangeHeight}
							name='maxHeight'
							min={0}
						/>
					</div>

					<div>
						<label>Weight:</label>
						<input
							className='input'
							placeholder='Kg'
							value={weight.minWeight}
							type='number'
							onChange={handleChangeWeight}
							name='minWeight'
							min={0}
						/>
						<input
							className='input'
							placeholder='Kg'
							value={weight.maxWeight}
							type='number'
							onChange={handleChangeWeight}
							name='maxWeight'
							min={0}
						/>
					</div>
					<div>
						<label>Life Span:</label>
						<input
							className='input'
							placeholder='YY'
							value={life_span.lifemin}
							type='number'
							onChange={handleChangeLifeSpan}
							name='lifemin'
							min={0}
						/>
						<input
							className='input'
							type='number'
							placeholder='YY'
							value={life_span.lifemax}
							onChange={handleChangeLifeSpan}
							name='lifemax'
							min={0}
						/>
					</div>
					<div>
						<label>Temperaments:</label>
						<div>
							<select
								name='temperaments'
								value={temperament}
								onChange={handleTemperaments}
							>
								<option value=''>Select</option>
								{temperaments.map(e => (
									<option key={e} value={e}>
										{e}
									</option>
								))}
							</select>
							<button type='submit'>Agregar</button>
						</div>
					</div>
				</form>

				<ul className='input_temperament'>
					{dog.temperaments.map((e, i) => (
						<li key={i}>
							<p>{e}</p>
							<button className='x' onClick={() => handleDelete(i)}>
								X
							</button>
						</li>
					))}
				</ul>
				<button onClick={onSubmit}>Submit</button>
			</div>
		</>
	)
}
export default FormPage
