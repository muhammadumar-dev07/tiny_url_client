# Current backend contract

The development base URL is `http://localhost:5050`. There is no `/api` prefix.

## Create a short link

`POST /save`

Request:
```json
{ "longUrl": "https://example.com/path?q=1" }
```

Success (`200`):
```json
{ "ok": true, "shortURL": "http://localhost:5050/N-R67Ev" }
```

Any failure returns `500`:
```json
{ "ok": false, "message": "Internal Server Error" }
```

## Redirect

`GET /:shortId` returns a `302` redirect to the saved long URL. Unknown codes currently return a backend `500` JSON response.

## CORS

The backend allows `Access-Control-Allow-Origin: *` and does not support credentials. Requests must not include credentials.

## Not supported yet

- Alias
- Domains
- Recent links
- Delete
- Authentication
- Validation
- Rate limiting
