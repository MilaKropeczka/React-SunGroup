import React from 'react';

const Searchbar = () => {
	return (
		<div>
			<input
				className='form-control'
				style={{
					width: `200px`,
				}}
				type='text'
				placeholder='Szukaj...'
			/>
			<button type='button' className='btn btn-primary'>
				Szukaj
			</button>
		</div>
	);
};

export default Searchbar;
