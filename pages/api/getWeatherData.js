import axios from "axios";

export default async (req, res) => {
  const queryParam = req.query.cityName;
  const cityName =
    queryParam === null || queryParam === "" || queryParam === undefined
      ? process.env.DEFAULT_CITY
      : queryParam;
  const API_KEY = process.env.API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5`;
  axios
    .get(`${URL}/weather?q=${cityName}&&appid=${API_KEY}`)
    .then((res1) => {
      let lat = res1?.data?.coord?.lat;
      let lon = res1?.data?.coord?.lon;
      axios
        .get(`${URL}/onecall?lat=${lat}&lon=${lon}&%20&appid=${API_KEY}`)
        .then((res2) => res.status(200).json({ data: res2?.data }))
        .catch((err) => res.status(500).json({ data: err }));
    })
    .catch((err) => res.status(500).json({ data: err }));
};
