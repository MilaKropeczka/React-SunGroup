import React from 'react';

const Item = (props) => {
	return (
		<div id={props.id} className='card'>
			<div className='cardImgTop'>
				<div id={props.idImg} className='imgBlog'></div>
			</div>
			<div className='cardBody'>
				<div className='caption caption1 m-1'>Kategoria</div>
				<h6 className='m-1'>
					Intrygujący tytuł artykułu do przeczytania przez użytkownika
				</h6>
				<p className='body body1 m-1'>
					But I must explain to you how all this mistaken idea of
					denouncing pleasure and praising pain.
				</p>
				<p className='caption caption1 grey-600 m-1 date'>
					<i className='icon'>13.12.2021</i>
				</p>
				<br className='hiddenDeskop' />
				<hr className='hiddenDeskop' />
				<br className='hiddenDeskop' />
			</div>
		</div>
	);
};

export default Item;
