import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const answerSheets = {
  post: (props) => axios.post('/make', props, {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    },
  }),
};

export default answerSheets;