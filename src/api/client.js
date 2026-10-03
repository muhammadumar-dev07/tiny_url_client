import axios from 'axios';

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
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
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
      message: payload.message || 'Something went wrong.',
      fields,
    });
  },
);

export default client;
