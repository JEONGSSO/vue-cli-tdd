import axios from 'axios';

const HOST = 'http://localhost';
const PORT = 3000;

const HTTP_STATUS = {
  SUCCESS: 200,
  UN_AHTHORIZED: 401,
};

const UnAuthRedirector = () => {
  console.log('401');
};

const setInHeaderToken = (token) => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;
};

const request = (method, url, data) => axios({
  method,
  url: `${HOST}:${PORT}/${url}`,
  data,
}).catch((error) => {
  if (url === 'login') return;
  const { status } = error.response;
  if (status === HTTP_STATUS.UN_AHTHORIZED) UnAuthRedirector();
});

export { request, setInHeaderToken };
