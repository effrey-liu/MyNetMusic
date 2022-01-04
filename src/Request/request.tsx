import axios from 'axios'

export default function request(config: any) {
  const instance = axios.create({
    baseURL: 'https://kkapi-ten.vercel.app/',
    timeout: 50000
  })

  instance.interceptors.request.use(config => {
    return config;
  }, err => {
  });

  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
  });

  return instance(config);
}