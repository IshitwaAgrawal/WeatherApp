import axios from 'axios';

const instance = axios.create({
    // baseURL:'https://weatherapp-server.herokuapp.com/api/'
      baseURL:'http://ishitw.me:1357/api/'
});

export default instance;
