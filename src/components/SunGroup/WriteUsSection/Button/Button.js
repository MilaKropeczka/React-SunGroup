import React from 'react';

function Button(props) {
	return (
		<button id='formBtn' className='primaryLarge'>
			{props.name}
		</button>
	);
}

export default Button;
