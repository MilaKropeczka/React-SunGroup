import React, { useState } from 'react';

function Input(props) {
	const [isActive, setActive] = useState(``);

	const checkInput = () => {
		// const str = '729864129';
		const str = 'test';
		const reg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})/;
		if (reg.test(str)) {
			setActive(true);
			console.log(`dziala`);
		} else {
			setActive(false);
			console.log(`nie dziala`);
		}
	};

	return (
		<div className='form formInput'>
			<input
				type='text'
				pattern={props.pattern}
				id={props.id}
				className={
					'form__input' + ' ' + (isActive ? 'success' : 'error')
				}
				placeholder=' '
				minLength='3'
				maxLength='32'
				required
				onClick={checkInput}
			/>
			<label htmlFor={props.id} className='form__label'>
				{props.id}
			</label>
		</div>
	);
}

export default Input;
