import * as mockApi from './mock/index.js';
import { createLink as realCreateLink } from './links.js';
import { getDomains as realGetDomains } from './domains.js';
import { getMe as realGetMe, login as realLogin, logout as realLogout, register as realRegister } from './auth.js';
import { getRecentLinks as realGetRecentLinks, deleteLink as realDeleteLink } from './links.js';

const useMock = import.meta.env.VITE_USE_MOCK === 'true';

export const createLink = useMock ? mockApi.createLink : realCreateLink;
export const getRecentLinks = useMock ? mockApi.getRecentLinks : realGetRecentLinks;
export const deleteLink = useMock ? mockApi.deleteLink : realDeleteLink;
export const getDomains = useMock ? mockApi.getDomains : realGetDomains;
export const register = useMock ? mockApi.register : realRegister;
export const login = useMock ? mockApi.login : realLogin;
export const logout = useMock ? mockApi.logout : realLogout;
export const getMe = useMock ? mockApi.getMe : realGetMe;

export {
  AuthProvider,
  AuthContext,
  useAuth,
  useDeleteLink,
  useDomains,
  useRecentLinks,
  useShortenLink,
} from './hooks.jsx';
