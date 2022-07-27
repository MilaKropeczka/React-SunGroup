import React from 'react';
import Input from './Input/Input';
import TextArea from './TextArea/TextArea';
import Checkbox from './Checkbox/Checkbox';
import img from '../../../assets/SunGroup/img/ContactImage.jpg';

function WriteUsSection() {
	return (
		<section className='writeUs'>
			<div className='left'>
				<div className='box'>
					<h3>Napisz do nas</h3>
					<form id='writeUs'>
						<div className='wrapper'>
							<Input pattern="[a-zA-Z'-'\s]*" id='name' />
							<Input pattern="[a-zA-Z'-'\s]*" id='surname' />
						</div>
						<div className='wrapper'>
							<Input
								pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
								id='email'
							/>
							<Input
								pattern='\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})'
								id='number'
							/>
						</div>
						<TextArea />
						<Checkbox />
						<button id='formBtn' className='primaryLarge'>
							Wyślij wiadomość
						</button>
					</form>
				</div>
			</div>
			<div className='right hiddenMobile'>
				<div className='box'>
					<img src={img} alt='dziewczyna' />
				</div>
			</div>
		</section>
	);
}

export default WriteUsSection;
