import React from 'react';

function Input(props) {
	return (
		<div className='form formInput'>
			<input
				type='text'
				pattern={props.pattern}
				id={props.id}
				className='form__input'
				placeholder=' '
				minLength='3'
				maxLength='32'
				required
			/>
			<label htmlFor={props.id} className='form__label'>
				{props.id}
			</label>
		</div>
	);
}

export default Input;
