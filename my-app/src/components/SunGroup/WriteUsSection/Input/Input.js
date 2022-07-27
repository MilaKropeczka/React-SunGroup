import React from 'react';

function Input(props) {
	return (
		<div className='form formInput'>
			<input
				type='text'
				pattern={props.pattern}
				id={props.id}
				className='formInput'
				placeholder=' '
				minLength='3'
				maxLength='32'
				required
			/>
			<label htmlFor={props.id} className='formLabel'>
				{props.id}
			</label>
		</div>
	);
}

export default Input;
