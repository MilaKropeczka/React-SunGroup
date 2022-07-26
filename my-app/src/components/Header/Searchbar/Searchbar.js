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
			<button className='button'>Szukaj</button>
			<button type='button' class='btn btn-primary'>
				Primary
			</button>
		</div>
	);
};

export default Searchbar;
