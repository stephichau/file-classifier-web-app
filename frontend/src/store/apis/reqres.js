import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const reqres = {
  getUsers: () => axios.get('/users'),
  getColors: () => axios.get('/colors')
};

export default reqres;