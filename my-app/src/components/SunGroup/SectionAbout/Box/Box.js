import React from 'react';
import Lists from './Lists/Lists';

const Box = () => {
	return (
		<div className='bottom'>
			<Lists className='items item1' />
			<Lists className='items item2' />
			<Lists className='items item3' />
		</div>
	);
};

export default Box;
