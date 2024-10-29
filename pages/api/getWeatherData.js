import axios from "axios";

export default async (req, res) => {
  const queryParam = req.query.cityName;
  const cityName =
    queryParam === null || queryParam === "" || queryParam === undefined
      ? process.env.DEFAULT_CITY
      : queryParam;
  const API_KEY = process.env.API_KEY;
  const URL = `https://api.openweathermap.org`;
  axios
    .get(`${URL}/geo/1.0/direct?q=${cityName}&appid=${API_KEY}`)
    .then((res1) => {
      console.log(res1?.data);
      let lat = res1?.data[0]?.lat;
      let lon = res1?.data[0]?.lon;
      let cityName_EN = res1?.data[0]?.local_names?.en;
      let state = res1?.data[0]?.state;
      let country = res1?.data[0]?.country;
      axios
        .get(`${URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then((res2) => {
          console.log(res2.data);
          const final_data = { ...res2?.data, name: cityName_EN };
          res.status(200).json({ data: final_data });
        })
        .catch((err) => res.status(500).json({ data: err }));
    })
    .catch((err) => res.status(500).json({ data: err }));
};
/*

http://api.openweathermap.org/geo/1.0/direct?q=Delhi&appid=<API_KEY>

${URL}/geo/1.0/direct?q={cityName}&appid=${API_KEY}

{
  name: 'Delhi',
  local_names: {
    ru: 'Дели',
    pt: 'Deli',
    my: 'ဒေလီမြို့',
    uk: 'Делі',
    pa: 'ਦਿੱਲੀ',
    ar: 'دلهي',
    ko: '델리',
    ml: 'ഡെൽഹി',
    el: 'Δελχί',
    cs: 'Dillí',
    de: 'Delhi',
    zh: '德里',
    te: 'ఢిల్లీ',
    eo: 'Delhio',
    he: 'דלהי',
    ku: 'Delhî',
    en: 'Delhi',
    fr: 'Delhi',
    fa: 'دهلی',
    ur: 'دہلی',
    es: 'Delhi',
    ne: 'दिल्ली',
    lv: 'Deli',
    ta: 'தில்லி',
    bn: 'দিল্লি',
    kn: 'ದೆಹಲಿ',
    ms: 'Delhi',
    oc: 'Delhi',
    hi: 'दिल्ली',
    ja: 'デリー',
    th: 'เดลี'
  },
  lat: 28.6517178,
  lon: 77.2219388,
  country: 'IN',
  state: 'Delhi'
}
  // sample

*/
/*

https://api.openweathermap.org/data/2.5/weather?lat=28.448051&lon=78.779610&appid=<API_KEY>

${URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}

{
  coord: { lon: 77.2219, lat: 28.6517 },
  weather: [ { id: 721, main: 'Haze', description: 'haze', icon: '50n' } ],
  base: 'stations',
  main: {
    temp: 297.21,
    feels_like: 297.58,
    temp_min: 297.21,
    temp_max: 297.21,
    pressure: 1008,
    humidity: 73,
    sea_level: 1008,
    grnd_level: 983
  },
  visibility: 3000,
  wind: { speed: 1.03, deg: 90 },
  clouds: { all: 0 },
  dt: 1730238301,
  sys: {
    type: 1,
    id: 9165,
    country: 'IN',
    sunrise: 1730250103,
    sunset: 1730290058
  },
  timezone: 19800,
  id: 1273294,
  name: 'Delhi',
  cod: 200
} //sample

*/
