import iconDogs from '/dogIcons.png'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { DogState } from '../utils/ApiState'
import { API_ALL_DOGS } from '../app/features/dogs/dogsSlice'
import '../Components.css'
const NavBar = () => {
	const dispachDogs = useDispatch()
	const handleClick = async () => {
		const dogsAll = await DogState()
		dispachDogs(API_ALL_DOGS(dogsAll))
	}
	return (
		<nav className='nav-bar'>
			<NavLink to='/dogs' className='icon-dog' onClick={handleClick}>
				<img src={iconDogs} alt='IconsDogs' />
			</NavLink>
			<div>
				<NavLink
					to='/dogs/post'
					className={({ isActive }) => [isActive ? 'active-dogs' : '']}
				>
					Create dog
				</NavLink>
			</div>
		</nav>
	)
}

export default NavBar
