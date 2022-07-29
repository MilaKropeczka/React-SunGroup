import React from 'react';
import Input from './Input/Input';
import TextArea from './TextArea/TextArea';
import Checkbox from './Checkbox/Checkbox';
import img from '../../../assets/SunGroup/img/ContactImage.jpg';
import Button from './Button/Button';

function WriteUsSection() {
	return (
		<section className='writeUs'>
			<div className='left'>
				<div className='box'>
					<h3>Napisz do nas</h3>
					<form id='writeUs'>
						<div className='wrapper'>
							<Input
								pattern='^[a-zA-Z]+(" "?:[\s]+[a-zA-Z ]+)*$'
								id='name'
								idParagraph='itemName'
								item='Wpisz poprawne imię'
							/>
							<Input
								pattern="[a-zA-Z'-'\s]*"
								id='surname'
								idParagraph='itemSurname'
								item='Wpisz poprawne nazwisko'
							/>
						</div>
						<div className='wrapper'>
							<Input
								pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
								id='email'
								idParagraph='itemEmail'
								item='Wpisz poprawny adres E-Mail'
							/>
							<Input
								pattern='\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{3})'
								id='number'
								idParagraph='itemNumber'
								item='Wpisz poprawny numer telefonu'
							/>
						</div>
						<TextArea
							pattern="[a-zA-Z'-'\s]*"
							idParagraph='itemMessage'
							item='Wpisz poprawną wiadomość. Minimum 3 znaki'
						/>
						<Checkbox
							text='Zapoznałem się z regulaminem i wyrażam zgodę na
                            przetwarzanie moich danych osobowych przez
                            Sungroup.pl'
						/>
						<Button name='Wyślij wiadomość' />
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
