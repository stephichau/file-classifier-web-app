import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const courses = {
  index: () => axios.get('/courses', {
    headers: {
      'accept': 'application/json'
    },
  }),
  post: (props) => axios.post('/courses', props, {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
  }),
  get: courseUuid => axios.get(`/courses/${courseUuid}`, {
    headers: {
      'accept': 'application/json'
    },
  }),
};

export default courses;