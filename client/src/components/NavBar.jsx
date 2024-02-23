import iconDogs from '/dogIcons.png'
import { NavLink } from 'react-router-dom'
import '../Components.css'
const NavBar = () => {
	return (
		<nav className='nav-bar'>
			<NavLink to='/dogs' className='icon-dog'>
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
