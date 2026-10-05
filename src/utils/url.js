export function normalizeUrl(value) {
  const trimmed = value.trim();
  if (!trimmed) {
    throw new Error('Please enter a URL');
  }

  // TODO(backend): move validation/normalization to the server
  const normalized = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const parsed = new URL(normalized);
    if (!['http:', 'https:'].includes(parsed.protocol) || !parsed.hostname.includes('.')) {
      throw new Error();
    }
  } catch {
    throw new Error('Please enter a valid URL');
  }

  return normalized;
}
