import client, { ApiError } from './client';
import { endpoints } from './endpoints';

const RECENT_LINKS_KEY = 'recent_links';
const MAX_RECENT_LINKS = 10;

function readRecentLinks() {
  try {
    const storedLinks = localStorage.getItem(RECENT_LINKS_KEY);
    const links = storedLinks ? JSON.parse(storedLinks) : [];
    return Array.isArray(links) ? links.slice(0, MAX_RECENT_LINKS) : [];
  } catch (error) {
    console.error('Unable to read recent links from localStorage.', error);
    return [];
  }
}

function writeRecentLinks(links) {
  try {
    localStorage.setItem(RECENT_LINKS_KEY, JSON.stringify(links.slice(0, MAX_RECENT_LINKS)));
  } catch (error) {
    console.error('Unable to save recent links to localStorage.', error);
  }
}

export async function createLink({ url }) {
  const { data } = await client.post(endpoints.links, { longUrl: url });
  if (data?.ok !== true || typeof data.shortURL !== 'string' || !data.shortURL) {
    throw new ApiError({
      status: 200,
      code: 'INVALID_RESPONSE',
      message: data?.message || 'Something went wrong. Please try again.',
    });
  }

  const shortUrl = data.shortURL;
  let code;
  try {
    code = new URL(shortUrl).pathname.split('/').filter(Boolean).pop();
  } catch {
    throw new ApiError({
      status: 200,
      code: 'INVALID_RESPONSE',
      message: 'Something went wrong. Please try again.',
    });
  }
  if (!code) {
    throw new ApiError({
      status: 200,
      code: 'INVALID_RESPONSE',
      message: 'Something went wrong. Please try again.',
    });
  }

  const link = { code, longUrl: url, shortUrl, createdAt: new Date().toISOString() };
  writeRecentLinks([link, ...readRecentLinks()]);
  return link;
}

export async function getRecentLinks(limit = MAX_RECENT_LINKS) {
  return readRecentLinks().slice(0, Number(limit) || MAX_RECENT_LINKS);
}

export async function deleteLink(code) {
  writeRecentLinks(readRecentLinks().filter((link) => link.code !== code));
  return { success: true, code };
}
