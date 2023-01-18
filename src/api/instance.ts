import axios from 'axios';

const baseInstance = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

export { baseInstance };
