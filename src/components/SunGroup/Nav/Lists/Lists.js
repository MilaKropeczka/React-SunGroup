import React from 'react';


const Lists = (props) => {
	return (
		<ul className={props.hidden}>
			<li className='action action2 menuButton'>
				<a href='#'>O nas</a>
			</li>
			<li className='action action2 menuButton'>
				<a href='#'>Blog</a>
			</li>
			<li className='action action2 menuButton'>
				<a href='#'>Kontakt</a>
			</li>
			<li className='action action2 menuButton'>
				<button className='primaryMedium'>Porozmawiajmy</button>
			</li>
		</ul>
	);
};

export default Lists;
