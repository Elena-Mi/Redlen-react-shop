import { data } from './data'

function Buttons({ setClothes }) {
			


	const filteredClothes = searchTerm => {
		const newClothesArray = data.filter(item =>
			item.searchTerm.includes(searchTerm)
		)
		setClothes(newClothesArray)
	}
	return (
		<div className='cont'>
			<button className='change' onClick={() => filteredClothes('woman')}>
				All
			</button>
			<button className='change' onClick={() => filteredClothes('shoe')}>
				Shoes
			</button>
			<button className='change' onClick={() => filteredClothes('t-shirt')}>
				T-shirt
			</button>
			<button className='change' onClick={() => filteredClothes('hat')}>
				Hats
			</button>
			<button className='change' onClick={() => filteredClothes('sweater')}>
				Sweater
			</button>
		</div>
	)
}
export default Buttons
