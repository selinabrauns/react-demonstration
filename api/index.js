import axios from 'axios';

axios.defaults.headers['crossDomain'] = true;
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';

const Api = {
  get: url => axios.get(`/api${url}`).then(res => res),

  post: (url, reqBody) => axios.post(`/api${url}`, reqBody).then(res => res),

  put: (url, reqBody) => axios.put(`/api${url}`, reqBody).then(res => res),

  delete: url => axios.delete(`/api${url}`).then(res => res)
};

export default Api;
