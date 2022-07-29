import React from 'react';

const ItemLeft = (props) => {
	return (
		<div className={props.className}>
			<div className={props.classNameVect}>
				<div id={props.imgNumb} className='img'></div>
				<br className='hiddenDeskop' />
				<br className='hiddenDeskop' />
				<br className='hiddenDeskop' />
			</div>
			<div className={props.classNameVect2}>
				<div className='box'>
					<p className='caption caption1'>Overline</p>
					<h2>Usługa oferowana przez firmę</h2>
					<p className='offer'>
						But I must explain to you how all this mistaken idea of
						denouncing pleasure and praising pain was born and I
						will give you a complete account of the system.
					</p>
					<button className='primaryLarge m-2'>
						Skontaktuj się z nami
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemLeft;
