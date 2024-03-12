import { Link } from 'react-router-dom';
import './App.css';
import { useState } from 'react'
import Modal from './Modal/Modal';
import Content from './Modal/Content';

function Products({ itemForSale }) {

  const[isOpen, setIsOpen] = useState(false);


	return (
		<div className='products'>
			{itemForSale.map(element => {
				const { id, name, searchTerm, description, size, price, image, title } =
					element
				return (
					<div key={id} className='product-card'>
						<Link to={`/${title}`}>
							<img className='product_img' src={image} alt='cloth' width='400px' height='500px' />
						</Link>

						<div className='product-info'>
							<h4 className='product-name'>{name}</h4>
							<h3 className='product-descr'> {description}</h3>
            
							<button onClick={ () => setIsOpen(true)}
              className='product-descr-second'> $ {price} -GET</button>
              
              
              {isOpen && <Modal setIsOpen={setIsOpen}> 
                  <Content setIsOpen={setIsOpen}/> 
                  </Modal>
              }
						</div>
					</div>
				)
			})}
		</div>
	)
}
export default Products
