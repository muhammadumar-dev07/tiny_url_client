import axios from 'axios';
import { getAuthToken } from './token';

export class ApiError extends Error {
  constructor({ status = 0, code = 'UNKNOWN_ERROR', message = 'Something went wrong.', fields = {} }) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
    this.message = message;
    this.fields = fields;
  }
}

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  timeout: 15000,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

client.interceptors.request.use((config) => {
  const token = getAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    const payload = error.response?.data || {};
    const fields = payload.fields || {};

    if (error.code === 'ERR_NETWORK' || !error.response) {
      throw new ApiError({
        status: 0,
        code: 'NETWORK_ERROR',
        message: "Can't reach the server. Please try again.",
        fields,
      });
    }

    throw new ApiError({
      status: error.response.status,
      code: payload.code || 'UNKNOWN_ERROR',
      message: error.response?.data?.message || 'Something went wrong. Please try again.',
      fields,
    });
  },
);

export default client;
