import { useEffect, useState } from 'react'
import './App.css'
import { data } from './data'
import LoaderPage from './Loader/LoaderPage'
import Products from './Products'
import Buttons from './Buttons';
import ContactForm from './Form/ContactForm'
import ScrollTop from './ScrollTop'


function Home() {
	const [stateLoader, setStateLoader] = useState(true);
	const [clothes, setClothes] = useState(data);
	


	useEffect(() => {
		const timer = setTimeout(() => setStateLoader(false), 2000)
		return () => clearInterval(timer)
	}, [])

	const top = () => {
		window.scrollTo(0,0)
	}
	return (
		<div>
		<ScrollTop/>
			{stateLoader && <LoaderPage />}

			<div>
			<div className="main_title_home">
				<h2 className='main_text_home'>Welcome to RedLen women's online shop</h2>
				<h2 className='main_textSecond_home'>Get 10% sale for first order</h2>
			</div>
				<div className='cont'>
					<h2 className='back'>Make your shopping</h2>
				</div>
				<Buttons setClothes={setClothes} />
				<Products itemForSale={clothes} />
			</div>

			<div className="footer">
				<ContactForm/>
				
			</div>
			<button onClick={top} className="top-btn">TOP</button>
		</div>
	)
}
export default Home
