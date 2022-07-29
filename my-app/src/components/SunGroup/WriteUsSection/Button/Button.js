import React from 'react';

function Button() {
	return (
		<button id='formBtn' className='primaryLarge'>
			{props.name}
		</button>
	);
}

export default Button;
