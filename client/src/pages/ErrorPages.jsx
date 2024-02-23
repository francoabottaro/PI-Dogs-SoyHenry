import ErrorDogs from '../assets/dogError.gif'
import { Link } from 'react-router-dom'
const ErrorPages = () => {
	return (
		<div className='container error-container'>
			<h1>
				Error <span>404</span>!
			</h1>
			<Link to='/'>
				<img src={ErrorDogs} alt='Error' />
			</Link>
		</div>
	)
}

export default ErrorPages
