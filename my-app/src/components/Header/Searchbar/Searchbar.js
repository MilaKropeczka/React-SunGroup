import React from 'react';

const Searchbar = () => {
	return (
		<div>
			<input
				className='input-text'
				style={{
					width: `100px`,
				}}
				type='text'
				placeholder='Szukaj...'
			/>
			<button>Szukaj</button>
		</div>
	);
};

export default Searchbar;
