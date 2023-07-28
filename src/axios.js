import axios from 'axios';

const instance = axios.create({
    // baseURL:'https://weatherapp-server.herokuapp.com/api/'
      baseURL:'http://45.79.217.63:1357/api/'
});

export default instance;
