import React from 'react';
import Slider from 'react-slick';
import Box from './Box/Box';

const Item4 = () => {
	const settings = {
		autoplaySpeed: 2000,
		speed: 100,
		focusOnSelect: false,
		centerMode: true,
		// autoplay: true,
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		pauseOnHover: false,
	};
	return (
		<div>
			<br className='hiddenDeskop' />
			<hr className='hrItem' />
			<div className='item4'>
				<Slider {...settings}>
					<Box name='Jan Kowalski' />
					<Box name='Piotr Żabiński' />
					<Box name='Natalia Kozłowska' />
				</Slider>
			</div>
		</div>
	);
};

export default Item4;
