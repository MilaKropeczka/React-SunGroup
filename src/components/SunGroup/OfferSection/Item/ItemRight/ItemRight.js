import React from 'react';

const ItemRight = (props) => {
	return (
		<div className={props.className}>
			<div id={props.vect} className={props.vect}>
				<div className='box'>
					<p className='caption caption1'>Overline</p>
					<h2>Usługa oferowana przez firmę.</h2>
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
			<div className={props.idVect} id={props.idVect}>
				<div id={props.imgNumb} className='img'></div>
				<br className='hiddenDeskop' />
				<hr className='hiddenDeskop' />
				<br className='hiddenDeskop' />
			</div>
		</div>
	);
};

export default ItemRight;
