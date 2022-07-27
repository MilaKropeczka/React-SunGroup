import React from 'react';

function TextArea() {
	return (
		<>
			<div className='form formTextarea'>
				<textarea
					type='text'
					id='message'
					className='formInput'
					autoComplete='off'
					placeholder=' '
					required></textarea>
				<label htmlFor='message' className='formLabel'>
					Twoja wiadomość
				</label>
			</div>
			<p id='itemMessage'>To pole jest wymagane</p>
		</>
	);
}

export default TextArea;
