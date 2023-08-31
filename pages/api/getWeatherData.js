import axios from '../../utils/axios';
// import LRUCache from '../LRUCache';

const api_key = process.env.api_key;

// const cache = new LRUCache(10, 1*60*1000);

const dummy_response = {
	"lat": 28.45,
	"lon": 78.7667,
	"timezone": "Asia/Kolkata",
	"timezone_offset": 19800,
	"current": {
			"dt": 1693463749,
			"sunrise": 1693441352,
			"sunset": 1693487330,
			"temp": 308.03,
			"feels_like": 311.73,
			"pressure": 1006,
			"humidity": 45,
			"dew_point": 294.33,
			"uvi": 10.81,
			"clouds": 0,
			"visibility": 10000,
			"wind_speed": 3.37,
			"wind_deg": 312,
			"wind_gust": 4.73,
			"weather": [
					{
							"id": 800,
							"main": "Clear",
							"description": "clear sky",
							"icon": "04d"
					}
			]
	},
	"minutely": [
			{
					"dt": 1693463760,
					"precipitation": 0
			},
			{
					"dt": 1693463820,
					"precipitation": 0
			},
			{
					"dt": 1693463880,
					"precipitation": 0
			},
			{
					"dt": 1693463940,
					"precipitation": 0
			},
			{
					"dt": 1693464000,
					"precipitation": 0
			},
			{
					"dt": 1693464060,
					"precipitation": 0
			},
			{
					"dt": 1693464120,
					"precipitation": 0
			},
			{
					"dt": 1693464180,
					"precipitation": 0
			},
			{
					"dt": 1693464240,
					"precipitation": 0
			},
			{
					"dt": 1693464300,
					"precipitation": 0
			},
			{
					"dt": 1693464360,
					"precipitation": 0
			},
			{
					"dt": 1693464420,
					"precipitation": 0
			},
			{
					"dt": 1693464480,
					"precipitation": 0
			},
			{
					"dt": 1693464540,
					"precipitation": 0
			},
			{
					"dt": 1693464600,
					"precipitation": 0
			},
			{
					"dt": 1693464660,
					"precipitation": 0
			},
			{
					"dt": 1693464720,
					"precipitation": 0
			},
			{
					"dt": 1693464780,
					"precipitation": 0
			},
			{
					"dt": 1693464840,
					"precipitation": 0
			},
			{
					"dt": 1693464900,
					"precipitation": 0
			},
			{
					"dt": 1693464960,
					"precipitation": 0
			},
			{
					"dt": 1693465020,
					"precipitation": 0
			},
			{
					"dt": 1693465080,
					"precipitation": 0
			},
			{
					"dt": 1693465140,
					"precipitation": 0
			},
			{
					"dt": 1693465200,
					"precipitation": 0
			},
			{
					"dt": 1693465260,
					"precipitation": 0
			},
			{
					"dt": 1693465320,
					"precipitation": 0
			},
			{
					"dt": 1693465380,
					"precipitation": 0
			},
			{
					"dt": 1693465440,
					"precipitation": 0
			},
			{
					"dt": 1693465500,
					"precipitation": 0
			},
			{
					"dt": 1693465560,
					"precipitation": 0
			},
			{
					"dt": 1693465620,
					"precipitation": 0
			},
			{
					"dt": 1693465680,
					"precipitation": 0
			},
			{
					"dt": 1693465740,
					"precipitation": 0
			},
			{
					"dt": 1693465800,
					"precipitation": 0
			},
			{
					"dt": 1693465860,
					"precipitation": 0
			},
			{
					"dt": 1693465920,
					"precipitation": 0
			},
			{
					"dt": 1693465980,
					"precipitation": 0
			},
			{
					"dt": 1693466040,
					"precipitation": 0
			},
			{
					"dt": 1693466100,
					"precipitation": 0
			},
			{
					"dt": 1693466160,
					"precipitation": 0
			},
			{
					"dt": 1693466220,
					"precipitation": 0
			},
			{
					"dt": 1693466280,
					"precipitation": 0
			},
			{
					"dt": 1693466340,
					"precipitation": 0
			},
			{
					"dt": 1693466400,
					"precipitation": 0
			},
			{
					"dt": 1693466460,
					"precipitation": 0
			},
			{
					"dt": 1693466520,
					"precipitation": 0
			},
			{
					"dt": 1693466580,
					"precipitation": 0
			},
			{
					"dt": 1693466640,
					"precipitation": 0
			},
			{
					"dt": 1693466700,
					"precipitation": 0
			},
			{
					"dt": 1693466760,
					"precipitation": 0
			},
			{
					"dt": 1693466820,
					"precipitation": 0
			},
			{
					"dt": 1693466880,
					"precipitation": 0
			},
			{
					"dt": 1693466940,
					"precipitation": 0
			},
			{
					"dt": 1693467000,
					"precipitation": 0
			},
			{
					"dt": 1693467060,
					"precipitation": 0
			},
			{
					"dt": 1693467120,
					"precipitation": 0
			},
			{
					"dt": 1693467180,
					"precipitation": 0
			},
			{
					"dt": 1693467240,
					"precipitation": 0
			},
			{
					"dt": 1693467300,
					"precipitation": 0
			},
			{
					"dt": 1693467360,
					"precipitation": 0
			}
	],
	"hourly": [
			{
					"dt": 1693461600,
					"temp": 307.85,
					"feels_like": 311.69,
					"pressure": 1006,
					"humidity": 46,
					"dew_point": 294.53,
					"uvi": 10.22,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.95,
					"wind_deg": 307,
					"wind_gust": 4.05,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693465200,
					"temp": 308.03,
					"feels_like": 311.73,
					"pressure": 1006,
					"humidity": 45,
					"dew_point": 294.33,
					"uvi": 10.81,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.37,
					"wind_deg": 312,
					"wind_gust": 4.73,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693468800,
					"temp": 308.13,
					"feels_like": 311.6,
					"pressure": 1006,
					"humidity": 44,
					"dew_point": 294.06,
					"uvi": 9.56,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.84,
					"wind_deg": 316,
					"wind_gust": 4.79,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693472400,
					"temp": 308.31,
					"feels_like": 311.63,
					"pressure": 1005,
					"humidity": 43,
					"dew_point": 293.84,
					"uvi": 7.07,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 4.35,
					"wind_deg": 320,
					"wind_gust": 5.06,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693476000,
					"temp": 308.4,
					"feels_like": 311.81,
					"pressure": 1005,
					"humidity": 43,
					"dew_point": 293.93,
					"uvi": 4.17,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 4.47,
					"wind_deg": 321,
					"wind_gust": 5.36,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693479600,
					"temp": 308.21,
					"feels_like": 312.11,
					"pressure": 1004,
					"humidity": 45,
					"dew_point": 294.49,
					"uvi": 1.81,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 4.16,
					"wind_deg": 323,
					"wind_gust": 5.57,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693483200,
					"temp": 306.69,
					"feels_like": 311.53,
					"pressure": 1003,
					"humidity": 53,
					"dew_point": 296.02,
					"uvi": 0.47,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.22,
					"wind_deg": 329,
					"wind_gust": 5.43,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693486800,
					"temp": 304.4,
					"feels_like": 308.53,
					"pressure": 1003,
					"humidity": 60,
					"dew_point": 295.86,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.85,
					"wind_deg": 330,
					"wind_gust": 3.77,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693490400,
					"temp": 303.73,
					"feels_like": 307.35,
					"pressure": 1003,
					"humidity": 61,
					"dew_point": 295.36,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.74,
					"wind_deg": 331,
					"wind_gust": 3.56,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693494000,
					"temp": 303.18,
					"feels_like": 306.88,
					"pressure": 1004,
					"humidity": 64,
					"dew_point": 295.56,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.42,
					"wind_deg": 350,
					"wind_gust": 2.49,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693497600,
					"temp": 302.72,
					"feels_like": 306.33,
					"pressure": 1004,
					"humidity": 66,
					"dew_point": 295.73,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.96,
					"wind_deg": 12,
					"wind_gust": 2.02,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693501200,
					"temp": 302.39,
					"feels_like": 305.83,
					"pressure": 1004,
					"humidity": 67,
					"dew_point": 295.69,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.28,
					"wind_deg": 14,
					"wind_gust": 1.37,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693504800,
					"temp": 302.15,
					"feels_like": 305.51,
					"pressure": 1003,
					"humidity": 68,
					"dew_point": 295.57,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 0.7,
					"wind_deg": 355,
					"wind_gust": 0.78,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693508400,
					"temp": 301.82,
					"feels_like": 304.84,
					"pressure": 1003,
					"humidity": 68,
					"dew_point": 295.49,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 0.31,
					"wind_deg": 307,
					"wind_gust": 0.34,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693512000,
					"temp": 301.66,
					"feels_like": 304.68,
					"pressure": 1003,
					"humidity": 69,
					"dew_point": 295.38,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 0.74,
					"wind_deg": 241,
					"wind_gust": 0.83,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693515600,
					"temp": 301.48,
					"feels_like": 304.32,
					"pressure": 1003,
					"humidity": 69,
					"dew_point": 295.27,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.27,
					"wind_deg": 217,
					"wind_gust": 1.32,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693519200,
					"temp": 301.36,
					"feels_like": 304.09,
					"pressure": 1003,
					"humidity": 69,
					"dew_point": 295.13,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.43,
					"wind_deg": 219,
					"wind_gust": 1.53,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693522800,
					"temp": 301.11,
					"feels_like": 303.61,
					"pressure": 1003,
					"humidity": 69,
					"dew_point": 294.98,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.44,
					"wind_deg": 232,
					"wind_gust": 1.48,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693526400,
					"temp": 300.8,
					"feels_like": 303.15,
					"pressure": 1004,
					"humidity": 70,
					"dew_point": 294.76,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.18,
					"wind_deg": 246,
					"wind_gust": 1.34,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693530000,
					"temp": 300.99,
					"feels_like": 303.64,
					"pressure": 1004,
					"humidity": 71,
					"dew_point": 295.38,
					"uvi": 0.15,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 0.66,
					"wind_deg": 355,
					"wind_gust": 0.86,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693533600,
					"temp": 302.26,
					"feels_like": 305.56,
					"pressure": 1005,
					"humidity": 67,
					"dew_point": 295.61,
					"uvi": 0.92,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.56,
					"wind_deg": 37,
					"wind_gust": 1.59,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693537200,
					"temp": 303.76,
					"feels_like": 307.42,
					"pressure": 1006,
					"humidity": 61,
					"dew_point": 295.61,
					"uvi": 2.74,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.42,
					"wind_deg": 38,
					"wind_gust": 1.02,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693540800,
					"temp": 305.63,
					"feels_like": 309.81,
					"pressure": 1006,
					"humidity": 55,
					"dew_point": 295.53,
					"uvi": 5.43,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 0.46,
					"wind_deg": 8,
					"wind_gust": 1.05,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693544400,
					"temp": 307.13,
					"feels_like": 311.17,
					"pressure": 1006,
					"humidity": 49,
					"dew_point": 294.95,
					"uvi": 8.23,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.66,
					"wind_deg": 271,
					"wind_gust": 2.51,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693548000,
					"temp": 308.27,
					"feels_like": 311.89,
					"pressure": 1005,
					"humidity": 44,
					"dew_point": 294.29,
					"uvi": 10.21,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.64,
					"wind_deg": 278,
					"wind_gust": 3.75,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693551600,
					"temp": 309.34,
					"feels_like": 312.68,
					"pressure": 1004,
					"humidity": 40,
					"dew_point": 293.94,
					"uvi": 10.66,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.39,
					"wind_deg": 290,
					"wind_gust": 5.02,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693555200,
					"temp": 310.15,
					"feels_like": 313.21,
					"pressure": 1003,
					"humidity": 37,
					"dew_point": 293.33,
					"uvi": 9.43,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 4.03,
					"wind_deg": 298,
					"wind_gust": 5.51,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693558800,
					"temp": 310.2,
					"feels_like": 313.68,
					"pressure": 1002,
					"humidity": 38,
					"dew_point": 293.48,
					"uvi": 6.97,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 4.85,
					"wind_deg": 303,
					"wind_gust": 5.94,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693562400,
					"temp": 309.82,
					"feels_like": 313.66,
					"pressure": 1002,
					"humidity": 40,
					"dew_point": 294.11,
					"uvi": 4.13,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 4.97,
					"wind_deg": 316,
					"wind_gust": 6.42,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693566000,
					"temp": 309.05,
					"feels_like": 314.34,
					"pressure": 1002,
					"humidity": 46,
					"dew_point": 295.8,
					"uvi": 1.78,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 4.4,
					"wind_deg": 325,
					"wind_gust": 6.49,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693569600,
					"temp": 307.57,
					"feels_like": 313.99,
					"pressure": 1001,
					"humidity": 54,
					"dew_point": 296.93,
					"uvi": 0.46,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.92,
					"wind_deg": 336,
					"wind_gust": 4.92,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693573200,
					"temp": 305.36,
					"feels_like": 310.72,
					"pressure": 1001,
					"humidity": 60,
					"dew_point": 296.6,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.39,
					"wind_deg": 344,
					"wind_gust": 2.57,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693576800,
					"temp": 304.67,
					"feels_like": 309.13,
					"pressure": 1002,
					"humidity": 60,
					"dew_point": 296.04,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.04,
					"wind_deg": 351,
					"wind_gust": 2.23,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693580400,
					"temp": 304.14,
					"feels_like": 308.23,
					"pressure": 1002,
					"humidity": 61,
					"dew_point": 295.82,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.69,
					"wind_deg": 344,
					"wind_gust": 1.82,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693584000,
					"temp": 303.57,
					"feels_like": 307.48,
					"pressure": 1003,
					"humidity": 63,
					"dew_point": 295.88,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.29,
					"wind_deg": 316,
					"wind_gust": 1.53,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693587600,
					"temp": 303.23,
					"feels_like": 306.98,
					"pressure": 1002,
					"humidity": 64,
					"dew_point": 295.8,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 0.98,
					"wind_deg": 289,
					"wind_gust": 1.05,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693591200,
					"temp": 303.06,
					"feels_like": 306.84,
					"pressure": 1002,
					"humidity": 65,
					"dew_point": 295.68,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 1.31,
					"wind_deg": 239,
					"wind_gust": 1.36,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693594800,
					"temp": 302.76,
					"feels_like": 306.21,
					"pressure": 1002,
					"humidity": 65,
					"dew_point": 295.48,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.15,
					"wind_deg": 232,
					"wind_gust": 2.18,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693598400,
					"temp": 302.56,
					"feels_like": 305.8,
					"pressure": 1001,
					"humidity": 65,
					"dew_point": 295.24,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.71,
					"wind_deg": 243,
					"wind_gust": 3.13,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693602000,
					"temp": 302.25,
					"feels_like": 305.18,
					"pressure": 1001,
					"humidity": 65,
					"dew_point": 294.98,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.23,
					"wind_deg": 246,
					"wind_gust": 5.1,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693605600,
					"temp": 301.94,
					"feels_like": 304.59,
					"pressure": 1001,
					"humidity": 65,
					"dew_point": 294.75,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.84,
					"wind_deg": 254,
					"wind_gust": 4.9,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693609200,
					"temp": 301.61,
					"feels_like": 303.84,
					"pressure": 1001,
					"humidity": 64,
					"dew_point": 294.28,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.53,
					"wind_deg": 278,
					"wind_gust": 4.33,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693612800,
					"temp": 301.16,
					"feels_like": 303.2,
					"pressure": 1002,
					"humidity": 65,
					"dew_point": 294.02,
					"uvi": 0,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.57,
					"wind_deg": 325,
					"wind_gust": 4.3,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01n"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693616400,
					"temp": 300.55,
					"feels_like": 302.8,
					"pressure": 1003,
					"humidity": 71,
					"dew_point": 294.77,
					"uvi": 0.15,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.41,
					"wind_deg": 339,
					"wind_gust": 3.49,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693620000,
					"temp": 302.07,
					"feels_like": 305.35,
					"pressure": 1003,
					"humidity": 68,
					"dew_point": 295.49,
					"uvi": 0.91,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 2.36,
					"wind_deg": 331,
					"wind_gust": 4.79,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693623600,
					"temp": 304.23,
					"feels_like": 307.67,
					"pressure": 1004,
					"humidity": 58,
					"dew_point": 295.11,
					"uvi": 2.72,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 3.39,
					"wind_deg": 314,
					"wind_gust": 8.96,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693627200,
					"temp": 306.14,
					"feels_like": 308.33,
					"pressure": 1004,
					"humidity": 46,
					"dew_point": 293.03,
					"uvi": 5.35,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 6.08,
					"wind_deg": 306,
					"wind_gust": 11.3,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			},
			{
					"dt": 1693630800,
					"temp": 307.29,
					"feels_like": 309.09,
					"pressure": 1004,
					"humidity": 41,
					"dew_point": 292.36,
					"uvi": 8.13,
					"clouds": 0,
					"visibility": 10000,
					"wind_speed": 6.83,
					"wind_deg": 307,
					"wind_gust": 11.66,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"pop": 0
			}
	],
	"daily": [
			{
					"dt": 1693463400,
					"sunrise": 1693441352,
					"sunset": 1693487330,
					"moonrise": 1693489020,
					"moonset": 1693441200,
					"moon_phase": 0.5,
					"temp": {
							"day": 307.85,
							"min": 299.35,
							"max": 308.4,
							"night": 302.15,
							"eve": 306.69,
							"morn": 299.35
					},
					"feels_like": {
							"day": 311.69,
							"night": 305.51,
							"eve": 311.53,
							"morn": 299.35
					},
					"pressure": 1006,
					"humidity": 46,
					"dew_point": 294.53,
					"wind_speed": 4.47,
					"wind_deg": 321,
					"wind_gust": 5.57,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"clouds": 0,
					"pop": 0,
					"uvi": 10.81
			},
			{
					"dt": 1693549800,
					"sunrise": 1693527781,
					"sunset": 1693573663,
					"moonrise": 1693577580,
					"moonset": 1693531740,
					"moon_phase": 0.55,
					"temp": {
							"day": 308.27,
							"min": 300.8,
							"max": 310.2,
							"night": 303.06,
							"eve": 307.57,
							"morn": 300.8
					},
					"feels_like": {
							"day": 311.89,
							"night": 306.84,
							"eve": 313.99,
							"morn": 303.15
					},
					"pressure": 1005,
					"humidity": 44,
					"dew_point": 294.29,
					"wind_speed": 4.97,
					"wind_deg": 316,
					"wind_gust": 6.49,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"clouds": 0,
					"pop": 0,
					"uvi": 10.66
			},
			{
					"dt": 1693636200,
					"sunrise": 1693614211,
					"sunset": 1693659996,
					"moonrise": 1693665960,
					"moonset": 1693622160,
					"moon_phase": 0.59,
					"temp": {
							"day": 308.34,
							"min": 300.55,
							"max": 309.83,
							"night": 302.58,
							"eve": 307.32,
							"morn": 301.16
					},
					"feels_like": {
							"day": 309.84,
							"night": 303.96,
							"eve": 310.92,
							"morn": 303.2
					},
					"pressure": 1003,
					"humidity": 37,
					"dew_point": 291.52,
					"wind_speed": 7.69,
					"wind_deg": 309,
					"wind_gust": 11.66,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"clouds": 0,
					"pop": 0,
					"uvi": 10.63
			},
			{
					"dt": 1693722600,
					"sunrise": 1693700640,
					"sunset": 1693746327,
					"moonrise": 1693754460,
					"moonset": 1693712520,
					"moon_phase": 0.62,
					"temp": {
							"day": 307.26,
							"min": 301.16,
							"max": 309.21,
							"night": 301.88,
							"eve": 306.87,
							"morn": 301.16
					},
					"feels_like": {
							"day": 308.51,
							"night": 303.06,
							"eve": 310,
							"morn": 301.44
					},
					"pressure": 1003,
					"humidity": 39,
					"dew_point": 291.45,
					"wind_speed": 6.75,
					"wind_deg": 306,
					"wind_gust": 12.7,
					"weather": [
							{
									"id": 801,
									"main": "Clouds",
									"description": "few clouds",
									"icon": "02d"
							}
					],
					"clouds": 23,
					"pop": 0,
					"uvi": 10.49
			},
			{
					"dt": 1693809000,
					"sunrise": 1693787069,
					"sunset": 1693832659,
					"moonrise": 1693843020,
					"moonset": 1693802820,
					"moon_phase": 0.66,
					"temp": {
							"day": 307.24,
							"min": 299.99,
							"max": 309.02,
							"night": 301.47,
							"eve": 306.12,
							"morn": 299.99
					},
					"feels_like": {
							"day": 307.76,
							"night": 302.84,
							"eve": 308.82,
							"morn": 300.53
					},
					"pressure": 1002,
					"humidity": 36,
					"dew_point": 290.13,
					"wind_speed": 5.98,
					"wind_deg": 312,
					"wind_gust": 11.44,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"clouds": 0,
					"pop": 0,
					"uvi": 10.29
			},
			{
					"dt": 1693895400,
					"sunrise": 1693873498,
					"sunset": 1693918990,
					"moonrise": 1693931760,
					"moonset": 1693893060,
					"moon_phase": 0.69,
					"temp": {
							"day": 307.3,
							"min": 300,
							"max": 308.82,
							"night": 302.12,
							"eve": 306.89,
							"morn": 300
					},
					"feels_like": {
							"day": 312.95,
							"night": 306.19,
							"eve": 312.34,
							"morn": 302.23
					},
					"pressure": 1003,
					"humidity": 53,
					"dew_point": 296.38,
					"wind_speed": 3.88,
					"wind_deg": 80,
					"wind_gust": 4.78,
					"weather": [
							{
									"id": 800,
									"main": "Clear",
									"description": "clear sky",
									"icon": "01d"
							}
					],
					"clouds": 7,
					"pop": 0.14,
					"uvi": 11
			},
			{
					"dt": 1693981800,
					"sunrise": 1693959927,
					"sunset": 1694005320,
					"moonrise": 1694020800,
					"moonset": 1693983240,
					"moon_phase": 0.73,
					"temp": {
							"day": 300.13,
							"min": 298.68,
							"max": 301.91,
							"night": 300.7,
							"eve": 301.05,
							"morn": 298.68
					},
					"feels_like": {
							"day": 302.75,
							"night": 302.97,
							"eve": 304.43,
							"morn": 299.43
					},
					"pressure": 1006,
					"humidity": 79,
					"dew_point": 296.14,
					"wind_speed": 2.33,
					"wind_deg": 138,
					"wind_gust": 5.14,
					"weather": [
							{
									"id": 501,
									"main": "Rain",
									"description": "moderate rain",
									"icon": "10d"
							}
					],
					"clouds": 95,
					"pop": 0.9,
					"rain": 4.95,
					"uvi": 11
			},
			{
					"dt": 1694068200,
					"sunrise": 1694046356,
					"sunset": 1694091650,
					"moonrise": 1694110080,
					"moonset": 1694073300,
					"moon_phase": 0.75,
					"temp": {
							"day": 304.01,
							"min": 300.1,
							"max": 306.73,
							"night": 300.95,
							"eve": 304.64,
							"morn": 300.1
					},
					"feels_like": {
							"day": 308.45,
							"night": 303.43,
							"eve": 309.91,
							"morn": 302.42
					},
					"pressure": 1004,
					"humidity": 63,
					"dew_point": 296.33,
					"wind_speed": 3.28,
					"wind_deg": 278,
					"wind_gust": 4.74,
					"weather": [
							{
									"id": 500,
									"main": "Rain",
									"description": "light rain",
									"icon": "10d"
							}
					],
					"clouds": 99,
					"pop": 0.32,
					"rain": 0.11,
					"uvi": 11
			}
	]
};

export default function handler(req, res){
	let city;
	let lat;
	let lon;
	try{
		city = atob(req.body["city"]);
	}catch{
		city = process.env.default_city;
	}

	// if(!!cache.get(city)){
	// 	console.log("found!")
	// 	res.status(200).send(cache.get(city));
	// 	res.end();
	// 	return ;
	// }

	axios.get(`/weather?q=${city}&appid=${api_key}`)
	.then(r => {
		lat = r.data.coord.lat;
		lon = r.data.coord.lon;
		axios.get(`/onecall?lat=${lat}&lon=${lon}&%20&appid=${api_key}`)
		.then(r2 => {
			// cache.put(city, r2.data);
			res.status(200).json(r2.data);
		}).catch(err => {
			console.log(err);
			res.status(500).json({error: err});
		})
	}).catch(err => {
		res.status(500).json({error: err});
	})
	console.log(city);

	// res.status(200).send(response);
}

// https://api.openweathermap.org/data/2.5/onecall?lat=28.6667&lon=77.2167&%20&appid=f44d49cf0c2c67629bf02ba1c1334951