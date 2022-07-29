import React from 'react';
import Box from './Box/Box';

const SectionAbout = () => {
	return (
		<section className='containerAbout'>
			<div className='top'>
				<div>
					<p className='caption caption 1 centerText'>Overline</p>
					<h2>Nagłówek w kilku słowach</h2>
				</div>
			</div>
			<Box />
		</section>
	);
};

export default SectionAbout;
