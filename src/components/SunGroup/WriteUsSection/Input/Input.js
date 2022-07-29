import React, { useState } from 'react';

function Input(props) {
	const [isActive, setActive] = useState('');
	const [text, setText] = useState('');
	const [isRefresh, setRefresh] = useState(null);

	const checkInput = () => {
		const reg = new RegExp(props.pattern);
		setRefresh(true);
		if (reg.test(text) && text.length > 2) {
			setActive(true);
		} else {
			setActive(false);
		}
		if (text.length === 0) {
			setRefresh(null);
		}
	};

	return (
		<div className='form formInput'>
			<input
				type='text'
				pattern={props.pattern}
				id={props.id}
				className={
					'form__input ' +
					(!isRefresh ? ' ' : isActive ? 'success' : 'error')
				}
				placeholder=' '
				minLength='3'
				maxLength='32'
				required
				onChange={(e) => setText(e.target.value)}
				onFocus={checkInput}
				onKeyUp={checkInput}
			/>
			<label htmlFor={props.id} className={'form__label'}>
				{props.id}
			</label>
			<p
				id={props.idParagraph}
				className={
					'item ' +
					(!isRefresh ? ' ' : isActive ? null : 'visibility')
				}>
				{props.item}
			</p>
		</div>
	);
}

export default Input;
