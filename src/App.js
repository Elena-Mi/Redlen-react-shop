import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Delivery from './Delivery'
import ScrollTop from './ScrollTop'
import AboutProduct from './AboutProduct'

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollTop />
				<header>
					<nav>
						<ul>
							<li>
								<Link to='/' className='link'>
									Home
								</Link>
							</li>
							<li>
								<Link to='/:title' className='link'>
									Products
								</Link>
							</li>
							<li>
								<Link to='/about' className='link'>
									About
								</Link>
							</li>

							<li>
								<Link to='/contact' className='link'>
									Contact
								</Link>
							</li>
							<li>
								<Link to='/delivery' className='link'>
									Delivery
								</Link>
							</li>
							
						</ul>
					</nav>
				</header>

				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/:title' element={<AboutProduct />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='delivery' element={<Delivery />} />
						
					</Routes>
				</main>
			</Router>
		</div>
	)
}

export default App
