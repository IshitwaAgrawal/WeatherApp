import axios from 'axios';

const instance = axios.create({
    // baseURL:'https://weatherapp-server.herokuapp.com/api/'
      baseURL:'http://172.105.54.25:1357/api/'
});

export default instance;
