import React, { useState } from 'react';

function Checkbox(props) {
	const [isActive, setActive] = useState('');

	const checkInput = (e) => {
		if (e.target.checked) {
			setActive(true);
			console.log(`zaznaczone`);
		} else {
			setActive(false);
		}
		// if (reg.test(text) && text.length > 2) {
		// 	setActive(true);
		// } else {
		// 	setActive(false);
		// }
	};

	return (
		<>
			<p>
				<input
					type='checkbox'
					name='rule'
					id='rule required'
					className={isActive ? null : 'errorCheckbox'}
					onClick={checkInput}
				/>
				<label htmlFor='rule'>{props.text}</label>
			</p>
		</>
	);
}

export default Checkbox;
