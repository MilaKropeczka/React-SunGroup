// import React from 'react';
import React, { useState } from 'react';
import Lists from './Lists/Lists';
import img from '../../../assets/SunGroup/img/SunPage.svg';

const Nav = () => {
	const [isActive, setActive] = useState('false');

	const menuToggle = () => {
		setActive(!isActive);
	};

	return (
		<nav>
			<div>
				<div className='navDeskop'>
					<p className='hiddenDeskop'>
						{/* <i className='fa-solid fa-bars' onClick={showMenu}></i> */}
						<i
							className='fa-solid fa-bars'
							onClick={menuToggle}></i>
					</p>
					<img src={img} alt='Logo SunGroup' />
					<Lists hidden='hiddenMobile' />
				</div>
				<div
					className={
						'navMobile hiddenDeskop' +
						' ' +
						(isActive ? 'show' : null)
					}>
					<Lists />
				</div>
				{/* {setMenu ? (
					<div className={`navMobile hiddenDeskop`}>
						<Lists />
					</div>
				) : (
					<div className={`navMobile hiddenDeskop show`}>
						<Lists />
					</div>
				)} */}
			</div>
		</nav>
	);
};

export default Nav;
