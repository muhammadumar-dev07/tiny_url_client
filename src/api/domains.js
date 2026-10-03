import client from './client';
import { endpoints } from './endpoints';

export async function getDomains() {
  const { data } = await client.get(endpoints.domains);
  return data;
}
