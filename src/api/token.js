const TOKEN_STORAGE_KEY = 'tinyurl-auth-token';

export function getAuthToken() {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function saveAuthToken(token) {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
}

export function clearAuthToken() {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}
