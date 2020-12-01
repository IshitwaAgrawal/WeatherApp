import axios from 'axios';

const instance = axios.create({
    baseURL:'https://weatherapp-server.herokuapp.com/api/'
});

export default instance;