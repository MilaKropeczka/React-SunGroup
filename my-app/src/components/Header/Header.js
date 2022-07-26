import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<div>
                <input style={{
                    width: `100px`
                }} className={styles.input} type='text' placeholder='Szukaj...' />
				<button>Szukaj</button>
			</div>
		</header>
	);
};

export default Header;
