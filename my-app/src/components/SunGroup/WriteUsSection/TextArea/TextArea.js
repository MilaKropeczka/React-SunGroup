import React from 'react';

function TextArea() {
	return (
		<>
			<div className='form formTextarea'>
				<textarea
					type='text'
					id='message'
					className='form__input'
					autoComplete='off'
					placeholder=' '
					required></textarea>
				<label htmlFor='message' className='form__label'>
					Twoja wiadomość
				</label>
			</div>
			<p id='itemMessage'>To pole jest wymagane</p>
		</>
	);
}

export default TextArea;
