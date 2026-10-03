# API contract

This frontend must speak to the backend through a single API layer. The backend contract is intentionally small and stable.

## Base URL

- Development: `/api`
- Production: configured by `VITE_API_BASE_URL`

## Authentication

### POST `/auth/register`
Request body:
```json
{
  "name": "Ada Lovelace",
  "email": "ada@example.com",
  "password": "secret123"
}
```

Success response:
```json
{
  "user": {
    "id": "user_123",
    "name": "Ada Lovelace",
    "email": "ada@example.com"
  }
}
```

### POST `/auth/login`
Request body:
```json
{
  "email": "ada@example.com",
  "password": "secret123"
}
```

Success response:
```json
{
  "user": {
    "id": "user_123",
    "name": "Ada Lovelace",
    "email": "ada@example.com"
  }
}
```

### POST `/auth/logout`
Success response:
```json
{
  "success": true
}
```

### GET `/auth/me`
Success response:
```json
{
  "user": {
    "id": "user_123",
    "name": "Ada Lovelace",
    "email": "ada@example.com"
  }
}
```

## Domains

### GET `/domains`
Success response:
```json
[
  {
    "id": "default",
    "name": "tinyurl.com",
    "isDefault": true,
    "isCustom": false
  },
  {
    "id": "brand",
    "name": "brand.com",
    "isDefault": false,
    "isCustom": true
  }
]
```

## Links

### POST `/links`
Request body:
```json
{
  "url": "https://example.com/very/long/path",
  "alias": "acme2025",
  "domain": "tinyurl.com"
}
```

Success response:
```json
{
  "id": "link_1",
  "code": "acme2025",
  "url": "https://example.com/very/long/path",
  "alias": "acme2025",
  "domain": "tinyurl.com",
  "shortUrl": "http://localhost:3000/acme2025",
  "createdAt": "2025-01-01T00:00:00.000Z"
}
```

### GET `/links/recent?limit=5`
Success response:
```json
[
  {
    "id": "link_1",
    "code": "acme2025",
    "url": "https://example.com/very/long/path",
    "alias": "acme2025",
    "domain": "tinyurl.com",
    "shortUrl": "http://localhost:3000/acme2025",
    "createdAt": "2025-01-01T00:00:00.000Z"
  }
]
```

### DELETE `/links/:code`
Success response:
```json
{
  "success": true,
  "code": "acme2025"
}
```

## Error format

Every failure must be returned in the same shape, regardless of error type.

```json
{
  "code": "ALIAS_TAKEN",
  "message": "This alias is not available.",
  "fields": {
    "alias": "This alias is already in use."
  }
}
```

Rules:

- `code` is a stable machine-readable value.
- `message` is the user-facing summary.
- `fields` is an object of field-specific errors.
- Network failures must become `code: "NETWORK_ERROR"` and `message: "Can't reach the server. Please try again."`
- The frontend must convert all failures into a single `ApiError` shape: `{ status, code, message, fields }`.

## Frontend rules

- No frontend business logic for uniqueness checks, alias generation, URL normalization, redirect handling, or server-side validation.
- All API access happens through `src/api/index.js`.
- The mock adapter lives under `src/api/mock/` and must match the same request and response shapes.
- Switching between mock and real backend is a one-line env change.
