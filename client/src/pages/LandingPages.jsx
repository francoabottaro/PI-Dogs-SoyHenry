import { Link } from 'react-router-dom'

const LandingPages = () => {
	return (
		<>
			<div className='container-landing container'>
				<h1>
					Welcome to{' '}
					<span>
						{'<'}Landing Pages{'/>'}
					</span>
				</h1>
				<div className='get-into'>
					<Link to='/dogs'>Get into</Link>
				</div>
			</div>
		</>
	)
}

export default LandingPages
