import './App.css'
import ContactForm from './Form/ContactForm'
import LoaderPage from './Loader/LoaderPage'
import { useEffect, useState } from 'react'

function About({}) {
	const [stateLoaderSecond, setStateLoaderSecond] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => setStateLoaderSecond(false), 1000)
		return () => clearInterval(timer)
	}, [])
	return (
		<div>
			{stateLoaderSecond && <LoaderPage />}

			<div className='about'>
				<h1 className='about_title'>
					We are an online store of women's goods RedLen
				</h1>
				<h2 className='about_text'>
					We are located in China and find only the best and highest quality
					products in the fashion market
				</h2>
				<div className='find'>
					<p className='about_find_one'>
						We can find whatever you want. Even if it is not presented in our
						store.Just tell us what you want and we will find
					</p>
					<p className='about_find_two'>
						Famous labels such as Zara, H&M and also popular world brands in the
						best quality, a copy that no one will ever distinguish from the
						original
					</p>
					<p className='about_find_three'>
						We work only with the best factories in China. And we can be
						responsible for quality. You don't even know, but all Italian brands
						buy leather from China
					</p>
				</div>

				<ContactForm />
			</div>
		</div>
	)
}
export default About
