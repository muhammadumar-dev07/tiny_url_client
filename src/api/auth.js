import client from './client';
import { endpoints } from './endpoints';

export async function register({ name, email, password }) {
  const { data } = await client.post(endpoints.auth.register, { name, email, password });
  return data.user || data;
}

export async function login({ email, password }) {
  const { data } = await client.post(endpoints.auth.login, { email, password });
  return data.user || data;
}

export async function logout() {
  const { data } = await client.post(endpoints.auth.logout);
  return data;
}

export async function getMe() {
  const { data } = await client.get(endpoints.auth.me);
  return data.user || data;
}
