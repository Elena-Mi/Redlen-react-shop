import React from 'react'
import './Form.css'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {

	const [state, handleSubmit] = useForm('mrgnlyqz');

	if (state.succeeded) {
		return <p>Thanks for order!</p>
	}
	return (
		<div className='form_bg'>
			<form className='form' onSubmit={handleSubmit}>
				<label htmlFor='email' className='fill_form'>
					What Do you want to buy?
				</label>

				<input
					className='form_input'
					id='email'
					type='email'
					name='email'
					placeholder='Type your email......'
				/>

				<ValidationError prefix='Email' field='email' errors={state.errors} />

				<textarea
					id='message'
					name='message'
					placeholder='Type message....'
					className='form_message'
				/>

				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>

				<button type='submit' disabled={state.submitting} className='form_btn'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default ContactForm;
