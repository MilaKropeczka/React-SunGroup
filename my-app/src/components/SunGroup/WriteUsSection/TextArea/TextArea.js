import React, { useState } from 'react';

function TextArea(props) {
	const [isActive, setActive] = useState('');
	const [text, setText] = useState('');

	const checkTextArea = () => {
		const reg = new RegExp(props.pattern);
		if (reg.test(text) && text.length > 2) {
			setActive(true);
		} else {
			setActive(false);
		}
	};

	return (
		<>
			<div className='form formTextarea'>
				<textarea
					type='text'
					id='message'
					className={
						'form__input' + ' ' + (isActive ? 'success' : 'error')
					}
					autoComplete='off'
					placeholder=' '
					required
					onChange={(e) => setText(e.target.value)}
					onClick={checkTextArea}
					onFocus={checkTextArea}
					onKeyUp={checkTextArea}></textarea>
				<label htmlFor='message' className='form__label'>
					Twoja wiadomość
				</label>
			</div>
			<p
				id={props.idParagraph}
				className={isActive ? null : 'visibility'}>
				{props.item}
			</p>
		</>
	);
}

export default TextArea;
