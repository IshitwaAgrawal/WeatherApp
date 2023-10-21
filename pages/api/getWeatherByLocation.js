import axios from '../utils/axios';

const api_key = process.env.api_key;

export default function handler(req, res){
	let lat,lon;
	if(!!req.body['lat'] && !!req.body['lon']){
		lat = atob(req.body['lat']);
		lon = atob(req.body['lon']);

		axios.get(`/onecall?lat=${lat}&lon=${lon}&%20&appid=${api_key}`)
		.then(r => res.status(200).json(r.data))
		.catch(err => res.status(500).json({error:err}));

	}else{
		axios.get(`/weather?q=Delhi&appid=${api_key}`).then(r => {
			lat = r.data.coord.lat;
			lon = r.data.coord.lon;

			axios.get(`/onecall?lat=${lat}&lon=${lon}&%20&appid=${api_key}`)
			.then(r => res.status(200).json(r.data))
			.catch(err => res.status(500).json({error:err}));
		}).catch(err => {
			res.status(500).json({error: err});
		});
	}
}