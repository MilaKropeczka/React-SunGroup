// import React from 'react';
import React, { useState } from 'react';
import Lists from './Lists/Lists';
import img from '../../../assets/SunGroup/img/SunPage.svg';
import Hamburger from 'hamburger-react';

const Nav = () => {
	const [menu, setMenu] = React.useState(true);
	const showMenu = () => {
		setMenu(false);
	};
	const [isOpen, setOpen] = useState(false);
	return (
		<nav>
			<div>
				<div className='navDeskop'>
					<p className='hiddenDeskop'>
						<i className='fa-solid fa-bars' onClick={showMenu}></i>
					</p>
					<img src={img} alt='Logo SunGroup' />
					<Lists hidden='hiddenMobile' />
				</div>
				{menu ? (
					<div className={`navMobile hiddenDeskop`}>
						<Lists />
					</div>
				) : (
					<div className={`navMobile hiddenDeskop show`}>
						<Lists />
					</div>
				)}
			</div>
		</nav>
	);
};

export default Nav;
