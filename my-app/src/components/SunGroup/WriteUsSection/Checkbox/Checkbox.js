import React from 'react';

function Checkbox() {
	return (
		<>
			<p>
				<input type='checkbox' name='rule' id='rule required' />
				<label htmlFor='rule'>
					{' '}
					Zapoznałem się z regulaminem i wyrażam zgodę na
					przetwarzanie moich danych osobowych przez Sungroup.pl
				</label>
			</p>
			<br />
		</>
	);
}

export default Checkbox;
