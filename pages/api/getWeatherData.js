import axios from '../axios';
// import LRUCache from '../LRUCache';

const api_key = process.env.api_key;

// const cache = new LRUCache(10, 1*60*1000);

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
}

// https://api.openweathermap.org/data/2.5/onecall?lat=28.6667&lon=77.2167&%20&appid=f44d49cf0c2c67629bf02ba1c1334951