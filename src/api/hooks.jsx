/* eslint-disable react-hooks/set-state-in-effect, react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import * as mockApi from './mock/index.js';
import * as linkApi from './links.js';
import * as authApi from './auth.js';
import * as domainApi from './domains.js';
import { FEATURES } from '../config/features.js';

const isMock = import.meta.env.VITE_USE_MOCK === 'true';
const MAX_RECENT_LINKS = 10;
const api = {
  createLink: isMock ? mockApi.createLink : linkApi.createLink,
  deleteLink: isMock ? mockApi.deleteLink : linkApi.deleteLink,
  getDomains: isMock ? mockApi.getDomains : domainApi.getDomains,
  getRecentLinks: isMock ? mockApi.getRecentLinks : linkApi.getRecentLinks,
  getMe: isMock ? mockApi.getMe : authApi.getMe,
  login: isMock ? mockApi.login : authApi.login,
  logout: isMock ? mockApi.logout : authApi.logout,
  register: isMock ? mockApi.register : authApi.register,
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(FEATURES.auth);

  const refreshUser = useCallback(async () => {
    if (!FEATURES.auth) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const result = await api.getMe();
      setUser(result?.user || result || null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (FEATURES.auth) {
      refreshUser();
    }
  }, [refreshUser]);

  const login = useCallback(async (payload) => {
    if (!FEATURES.auth) return null;
    const result = await api.login(payload);
    const nextUser = result?.user || result || null;
    setUser(nextUser);
    return nextUser;
  }, []);

  const register = useCallback(async (payload) => {
    if (!FEATURES.auth) return null;
    const result = await api.register(payload);
    const nextUser = result?.user || result || null;
    setUser(nextUser);
    return nextUser;
  }, []);

  const logout = useCallback(async () => {
    if (!FEATURES.auth) return;
    await api.logout();
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, loading, login, register, logout, refreshUser }),
    [user, loading, login, register, logout, refreshUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}

export function useShortenLink() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const submit = useCallback(async (payload) => {
    setLoading(true);
    setError(null);

    try {
      const result = await api.createLink(payload);
      setData(result);
      return result;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, error, submit };
}

export function useRecentLinks(limit = MAX_RECENT_LINKS) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await api.getRecentLinks(Math.min(limit, MAX_RECENT_LINKS));
      setData(result || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { data, loading, error, refresh };
}

export function useDomains() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const refresh = useCallback(async () => {
    if (!FEATURES.domains) {
      setData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await api.getDomains();
      setData(result || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { data, loading, error, refresh };
}

export function useDeleteLink() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const remove = useCallback(async (code) => {
    setLoading(true);
    setError(null);

    try {
      return await api.deleteLink(code);
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, error, remove };
}

export { AuthContext };
