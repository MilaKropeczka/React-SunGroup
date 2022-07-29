import React from 'react';
import img from '../../../../../../assets/SunGroup/img/Picture@2x.jpg';
const Box = (props) => {
	return (
		<div className='box'>
			<p className='caption caption1'>Referencje</p>
			<h2>Poznaj opinie naszych klientów</h2>
			<blockquote>
				<p>
					But I must explain to you how all this mistaken idea of
					denouncing pleasure and praising pain was born and I will
					give you a complete account of the system. But I must
					explain to you how all this mistaken idea of denouncing
					pleasure and praising pain was born and I will give you a
					complete account of the system.
				</p>
				<img src={img} alt='Avatar' />
				<br />
				<cite>{props.name}</cite>
				<p className='grey-700'>Firma Jana Kowalskiego</p>
			</blockquote>
		</div>
	);
};

export default Box;
