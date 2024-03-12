
import './Modal.css';
import ContactForm from '../Form/ContactForm';


const Content=({setIsOpen}) => {
  return (
		<div className='modal-content'>
			<h1 className='Content_title'>
				The site is still under development and we do not have a shopping cart
				yet. Please use the message form if you would like to purchase something
				or if you have questions. Thanks for understanding
			</h1>

      <ContactForm/>
			<button onClick={() => setIsOpen(false)} className='modal_btn'>
				Close
			</button>
		</div>
	)
}
export default Content;