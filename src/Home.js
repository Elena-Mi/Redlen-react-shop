import { useState } from 'react'
import './App.css'
import { data } from './data'
import Products from './Products'
import Buttons from './Buttons/Buttons'
import ContactForm from './Form/ContactForm'
import ScrollTop from './ScrollTop/ScrollTop'

function Home() {
	const [clothes, setClothes] = useState(data)

	const top = () => {
		window.scrollTo(0, 0)
	}
	return (
		<div>
			<ScrollTop />

			<div>
				<div className='main_title_home'>
					<h2 className='main_text_home'>
						Welcome to RedLen women's online shop
					</h2>
					<h2 className='main_textSecond_home'>Get 10% sale for first order</h2>
				</div>
				<div className='cont'>
					<h2 className='back'>Make your shopping</h2>
				</div>
				<Buttons setClothes={setClothes} />
				<Products itemForSale={clothes} />
			</div>

			<div className='footer'>
				<ContactForm />
			</div>
			<button onClick={top} className='top-btn'>
				TOP
			</button>
		</div>
	)
}
export default Home
