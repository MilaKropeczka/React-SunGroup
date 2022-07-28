import React from 'react';
import ItemLeft from './Item/ItemLeft/ItemLeft';
import ItemRight from './Item/ItemRight/ItemRight';
import Item4 from './Item/Item4/Item4';

const OfferSection = () => {
	return (
		<section className='sectionOffer'>
			<ItemLeft
				className='items item1'
				classNameVect='left'
				classNameVect2='right'
				imgNumb='img1'
			/>
			<ItemRight
				vect='left'
				className='items item2'
				imgNumb='img2'
				idVect='right'
			/>
			<ItemLeft
				className='items item3'
				classNameVect='left'
				classNameVect2='right'
				imgNumb='img3'
			/>
			<Item4 />
		</section>
	);
};

export default OfferSection;
