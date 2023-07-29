import axios from 'axios';

const instance = axios.create({
    // baseURL:'https://weatherapp-server.herokuapp.com/api/'
      baseURL:'https://weather-app-backend-bet9.onrender.com/api/',
});

export default instance;
