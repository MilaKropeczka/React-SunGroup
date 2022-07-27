import React from 'react';
import img from '../../../assets/SunGroup/img/SunPage.svg';
import img2 from '../../../assets/SunGroup/img/Icon/20x20/FacebookLogo.svg';
import img3 from '../../../assets/SunGroup/img/Icon/20x20/LinkedinLogo.svg';
import img4 from '../../../assets/SunGroup/img/Icon/20x20/TwitterLogo.svg';

function Footer() {
	return (
		<footer>
			<div className='top'>
				<div>
					<img src={img} alt='Logo SunPage' />
					<ul>
						<li className='action action2 menuButton'>O nas</li>
						<li className='action action2 menuButton'>Blog</li>
						<li className='action action2 menuButton'>Kontakt</li>
					</ul>
				</div>
			</div>
			<hr />
			<div className='bottom'>
				<div className='left'>
					<ul>
						<li>&copy; Copyrights 2021 Sungroup</li>
						<li>Polityka prywatności</li>
						<li>Regulamin</li>
					</ul>
				</div>
				<div className='right'>
					<ul className='media'>
						<li>
							<img src={img2} alt='Facebook Logo' />
						</li>
						<li>
							<img src={img3} alt='Linkedin Logo' />
						</li>
						<li>
							<img src={img4} alt='Twitter Logo' />
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
