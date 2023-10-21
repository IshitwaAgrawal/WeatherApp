import React from 'react';
import styles from '../styles/App.module.css';

const WeatherCardMinimize = () => {
	return (
		<div className={styles.weather__card__minimize}>
			<p>Tue</p>
			<div className={styles.image__wrapper}>
				<img src="https://img.icons8.com/m_outlined/2x/thirst.png" alt="Sunny" srcset="" />
			</div>
			<h2>16&deg;F</h2>
		</div>
	)
}

export default WeatherCardMinimize