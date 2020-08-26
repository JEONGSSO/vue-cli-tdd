import axios from 'axios';

const HOST = 'http://localhost';
const PORT = 3000;

const HTTP_STATUS = {
  SUCCESS: 200,
  UN_AHTHORIZED: 401,
};

const UnAuthRedirector = () => {
  console.log('로그인을 해줴요');
};

const req = (method, url, data) => axios({
  method,
  url: `${HOST}:${PORT}/${url}`,
  data,
}).catch((error) => {
  const { status } = error.response;
  if (status === HTTP_STATUS.UN_AHTHORIZED) UnAuthRedirector();
});

export default req;
