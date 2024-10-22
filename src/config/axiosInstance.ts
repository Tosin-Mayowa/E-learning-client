import axios from 'axios';

const requestClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // This should match the variable in .env.development
  timeout: 30000,
  headers: {
    Accept: 'application/json',
  },
  withCredentials: false
});

export default requestClient;
