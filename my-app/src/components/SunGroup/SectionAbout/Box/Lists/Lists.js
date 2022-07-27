import React from 'react';

const Lists = (props) => {
	return (
		<>
			<div className={props.className}>
				<div className='left'>
					<div className='iconBox'></div>
				</div>
				<div className='right'>
					<h6>Nagłówek w kilku słowach</h6>
					<p>
						But I must explain to you how all this mistaken idea of
						denouncing pleasure and praising pain was born.
					</p>
				</div>
			</div>
		</>
	);
};

export default Lists;
