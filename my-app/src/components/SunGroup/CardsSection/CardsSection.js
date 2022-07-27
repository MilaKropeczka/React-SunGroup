import React from 'react';
import Item from './Item/Item';

const CardsSection = () => {
	return (
		<section className='cards'>
			<Item id='card1' idImg='img4' />
			<Item id='card2' idImg='img5' />
			<Item id='card3' idImg='img6' />
		</section>
	);
};

export default CardsSection;
