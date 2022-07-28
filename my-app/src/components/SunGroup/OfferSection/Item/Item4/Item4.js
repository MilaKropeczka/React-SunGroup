import React from 'react';
import Slider from 'react-slick';
import Box from './Box/Box';

const Item4 = () => {
	const settings = {
		autoplaySpeed: 2000,
		speed: 1000,
		focusOnSelect: false,
		centerMode: true,
		// autoplay: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div>
			<br className='hiddenDeskop' />
			<hr className='hrItem' />
			<div className='item4'>
				<Slider {...settings}>
					<Box />
					<Box />
				</Slider>
			</div>
		</div>
	);
};

export default Item4;
