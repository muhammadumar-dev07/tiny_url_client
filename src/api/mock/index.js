// Mock follows the OLD contract and is out of sync with the real backend. Not used when VITE_USE_MOCK=false.
// DELETE THIS FOLDER when the real backend is ready.

const STORAGE_KEYS = {
  links: 'tinyurl-mock-links',
  auth: 'tinyurl-mock-user',
};

const defaultDomains = [
  { id: 'default', name: 'tinyurl.com', isDefault: true, isCustom: false },
  { id: 'brand', name: 'brand.com', isDefault: false, isCustom: true },
  { id: 'shop', name: 'shop.example', isDefault: false, isCustom: true },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const readLocalStorage = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const writeLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const generateCode = () =>
  Math.random().toString(36).slice(2, 8).toLowerCase() +
  Math.random().toString(36).slice(2, 5).toLowerCase();

const normalizeUrl = (url) => url.trim();

const createError = (code, message, fields = {}) => {
  const error = new Error(message);
  error.code = code;
  error.message = message;
  error.fields = fields;
  return error;
};

export async function getDomains() {
  await sleep(300);
  return readLocalStorage('tinyurl-mock-domains', defaultDomains);
}

export async function getRecentLinks(limit = 5) {
  await sleep(350);
  const links = readLocalStorage(STORAGE_KEYS.links, []);
  return links.slice(0, Number(limit) || 5);
}

export async function createLink({ url, alias = '', domain = 'tinyurl.com' }) {
  await sleep(450);
  const trimmedUrl = normalizeUrl(url);

  if (!trimmedUrl) {
    throw createError('VALIDATION_ERROR', 'A URL is required.', { url: 'A URL is required.' });
  }

  if (alias && alias.trim().length < 5) {
    throw createError('VALIDATION_ERROR', 'Alias must be at least 5 characters.', {
      alias: 'Alias must be at least 5 characters.',
    });
  }

  const links = readLocalStorage(STORAGE_KEYS.links, []);
  const finalAlias = alias ? alias.trim() : generateCode();
  const existing = links.find((link) => link.alias === finalAlias || link.code === finalAlias);

  if (existing) {
    throw createError('ALIAS_TAKEN', 'This alias is not available.', {
      alias: 'This alias is already in use.',
    });
  }

  const nextItem = {
    id: `link_${Date.now()}`,
    code: finalAlias,
    alias: finalAlias,
    url: trimmedUrl,
    domain,
    shortUrl: `${window.location.origin}/${finalAlias}`,
    createdAt: new Date().toISOString(),
  };

  const updatedLinks = [nextItem, ...links];
  writeLocalStorage(STORAGE_KEYS.links, updatedLinks);
  return nextItem;
}

export async function deleteLink(code) {
  await sleep(250);
  const links = readLocalStorage(STORAGE_KEYS.links, []);
  const filtered = links.filter((link) => link.code !== code);
  writeLocalStorage(STORAGE_KEYS.links, filtered);
  return { success: true, code };
}

export async function register({ name, email, password }) {
  await sleep(400);

  if (!name || !email || !password) {
    throw createError('VALIDATION_ERROR', 'Please fill in all fields.', {
      name: !name ? 'Name is required.' : undefined,
      email: !email ? 'Email is required.' : undefined,
      password: !password ? 'Password is required.' : undefined,
    });
  }

  const user = {
    id: `user_${Date.now()}`,
    name: name.trim(),
    email: email.trim(),
  };

  writeLocalStorage(STORAGE_KEYS.auth, user);
  return { user };
}

export async function login({ email, password }) {
  await sleep(400);

  if (!email || !password) {
    throw createError('VALIDATION_ERROR', 'Please provide an email and password.', {
      email: !email ? 'Email is required.' : undefined,
      password: !password ? 'Password is required.' : undefined,
    });
  }

  const existing = readLocalStorage(STORAGE_KEYS.auth, null);
  if (!existing || existing.email !== email.trim()) {
    throw createError('INVALID_CREDENTIALS', 'Incorrect email or password.', {
      email: 'Incorrect email or password.',
      password: 'Incorrect email or password.',
    });
  }

  writeLocalStorage(STORAGE_KEYS.auth, existing);
  return { user: existing };
}

export async function logout() {
  await sleep(200);
  localStorage.removeItem(STORAGE_KEYS.auth);
  return { success: true };
}

export async function getMe() {
  await sleep(250);
  const user = readLocalStorage(STORAGE_KEYS.auth, null);
  if (!user) {
    throw createError('UNAUTHENTICATED', 'You are not signed in.', {});
  }

  return { user };
}
