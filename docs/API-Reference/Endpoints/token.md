---
sidebar_position: 1
---

# Token

## Endpoint `POST /api/v1/token`

### Request Data

|   Parameter   |  Type  | Required |                       Description                       |
| :-----------: | :----: | :------: | :-----------------------------------------------------: |
|   tenant_id   | string |   true   |     the tenant the operation should be performed on     |
|  grant_type   | string |   true   | client_credentials, authorization_code or refresh_token |
|     code      | string | possibly |      required if grant_type is client_credentials       |
| refresh_token | string | possibly |         required if grant_type is refresh_token         |
| redirect_uri  | string |   true   |  the url to wich the service redirects after auth flow  |
|   client_id   | string |   true   |  client id of the oauth client performing the request   |
| client_secret | string | possibly |   required if client_credentials is set in grant_type   |
| code_verifier | string | possibly |                 required for PKCE flows                 |
|     state     | string |  false   |         can add additional security to the flow         |
|     scope     | string | possibly |   required if grant_type is set to client_credentials   |

### Success Response 200

```json
{
  "success": true,
  "access_token": {
    "token": "CvgEooWa7EbShMfEKJGKhzYcIkdrJMT0",
    "expires": 3600
  },
  "refresh_token": {
    "token": "fHmoWoi4cOXPfG6ZsB52WwANEUjMgy2C",
    "expires": 2592000
  },
  "token_type": "bearer"
}
```

### Error Response 400

```json
{
  "success": false,
  "error_code": 400,
  "error_msg": "Bad Request"
}
```

### Error Response 401

```json
{
  "success": false,
  "error_code": 401,
  "error_msg": "Unauthorized"
}
```

### Error Response 500

```json
{
  "success": false,
  "error_code": 500,
  "error_msg": "Internal Server Error"
}
```
