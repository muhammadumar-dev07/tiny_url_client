import client from './client';
import { endpoints } from './endpoints';

export async function createLink({ url, alias = '', domain = 'tinyurl.com' }) {
  const { data } = await client.post(endpoints.links, { url, alias, domain });
  return data;
}

export async function getRecentLinks(limit = 5) {
  const { data } = await client.get(`${endpoints.links}/recent`, {
    params: { limit },
  });
  return data;
}

export async function deleteLink(code) {
  const { data } = await client.delete(`${endpoints.links}/${code}`);
  return data;
}
