import React from 'react';
import Lists from './Lists/Lists';
import img from '../../../assets/SunGroup/img/SunPage.svg';

const Nav = () => {
	return (
		<nav>
			<div>
				<div className='navDeskop'>
					<p className='hiddenDeskop'>
						<i className='fa-solid fa-bars'></i>
					</p>
					<img src={img} alt='Logo SunGroup' />
					<Lists />
				</div>
				<div className='navMobile hiddenDeskop'>
					<Lists />
				</div>
			</div>
		</nav>
	);
};

export default Nav;
