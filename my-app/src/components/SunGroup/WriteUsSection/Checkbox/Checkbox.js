import React, { useState } from 'react';

function Checkbox(props) {
	const [isActive, setActive] = useState('');
	const [isRefresh, setRefresh] = useState(null);
	const [number, checkNumber] = useState(0);

	const checkInput = (e) => {
		setRefresh(true);
		if (e.target.checked) {
			setActive(true);
			checkNumber(1);
		} else {
			setActive(false);
			checkNumber(1);
		}
		if (!number === 1) {
			setRefresh(null);
		}
	};

	return (
		<>
			<p>
				<input
					type='checkbox'
					name='rule'
					id='rule required'
					className={
						!isRefresh ? ' ' : isActive ? null : 'errorCheckbox'
					}
					onClick={checkInput}
				/>
				<label htmlFor='rule'>{props.text}</label>
			</p>
		</>
	);
}

export default Checkbox;
