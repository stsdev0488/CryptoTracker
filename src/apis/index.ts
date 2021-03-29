import axios from 'axios';
import { API_BASE_URL } from '@configs';

const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { AxiosInstance };
