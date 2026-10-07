import client, { ApiError } from './client';
import { endpoints } from './endpoints';
import { clearAuthToken, getAuthToken, saveAuthToken } from './token';

async function authenticate(endpoint, credentials) {
  const { data } = await client.post(endpoint, credentials);

  if (data?.ok !== true || !data.user || typeof data.token !== 'string' || !data.token) {
    throw new ApiError({
      status: 200,
      code: 'INVALID_RESPONSE',
      message: data?.message || 'The server returned an invalid sign-in response.',
    });
  }

  saveAuthToken(data.token);
  return data;
}

export async function register(credentials) {
  return authenticate(endpoints.auth.register, credentials);
}

export async function login(credentials) {
  return authenticate(endpoints.auth.login, credentials);
}

export async function logout() {
  clearAuthToken();
}

export async function getMe() {
  const token = getAuthToken();
  if (!token) {
    throw new ApiError({
      status: 401,
      code: 'UNAUTHENTICATED',
      message: 'You are not signed in.',
    });
  }

  try {
    const { data } = await client.get(endpoints.auth.me);
    if (data?.ok !== true || !data.user) {
      throw new ApiError({
        status: 200,
        code: 'INVALID_RESPONSE',
        message: data?.message || 'The server returned an invalid account response.',
      });
    }
    return data;
  } catch (error) {
    if (error?.status === 401) {
      clearAuthToken();
    }
    throw error;
  }
}
