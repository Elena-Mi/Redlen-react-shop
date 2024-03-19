import { useParams, useNavigate } from 'react-router-dom';
import { data } from './data';
import './App.css';



function AboutProduct() {
	const navigate = useNavigate();
	const { title } = useParams();

	return (
		<div>
			{data
				.filter(item => item.title === title)
				.map((elem, index) => {
					return (
						<div className='about_product' key={index}>
							
								<img src={elem.image} alt='product' width='400px' />
							
							<div className='about_product_secondContainer'>
								<h3 className='about_product_description'>{elem.name}</h3>
								<p product-descr>{elem.description}</p>
								<p className='about_product-descr-text'>{elem.size}</p>
							</div>
							<button className='btn_aboutProduct' onClick={() => navigate(-1)}>
								Go back
							</button>
						</div>
					)
				})}
			<div className='aboutProduct_secondBlock'>
				<h1 className='aboutProduct_title'>
					If there is no product you want or you did not find your size. Please
					feel free contact us
				</h1>
				<p className='aboutProduct_text'>Our shop based in China we can find any product for you</p>
			</div>
     
		</div>
	)
}

export default AboutProduct;
