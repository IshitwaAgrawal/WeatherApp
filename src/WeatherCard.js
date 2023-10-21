import React from 'react'
import styles from '../styles/App.module.css';

const WeatherCard = () => {
	return (
		<div className={styles.weather__card}>
			<div className={styles.date__time}>
				<h3>Monday</h3>
				<h3>11:42 PM</h3>
			</div>
			<div className={styles.temperature}>
				<div className={styles.weather__details}>
					<h1>16&deg;F</h1>
					<p>Feels like: <b>18&deg;F</b></p>
					<p>Wind: <b>NE, 5-8 km/hr</b></p>
				</div>
				<img src="http://openweathermap.org/img/w/01d.png" alt="Sunny" srcset="" />
			</div>
			<div className={styles.more_weather_details}>
				<div className={styles.details1}>
					<p>Pressure: <b>1000mb</b></p>
					<p>Humidity: <b>51%</b></p>
				</div>
				<div className={styles.details2}>
					<p>Sunrise: <b>05:38</b></p>
					<p>Sunset: <b>19:03</b></p>
				</div>
			</div>
		</div>
	)
}

export default WeatherCard