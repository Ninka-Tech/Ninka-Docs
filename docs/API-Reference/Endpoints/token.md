---
sidebar_position: 1
---

# Token

## Client Credentials Flow

### Endpoint `POST /api/v1/token`

### Request Body

> Request Body is expected to be send as JSON-Body

|   Parameter   |  Type  | Required |                      Description                      |
| :-----------: | :----: | :------: | :---------------------------------------------------: |
|   tenant_id   | string |   true   |    the tenant the operation should be performed on    |
|  grant_type   | string |   true   |                  client_credentials                   |
| redirect_uri  | string |   true   | the url to wich the service redirects after auth flow |
|   client_id   | string |   true   | client id of the oauth client performing the request  |
| client_secret | string |   true   |          required in client_credentials flow          |
|     scope     | string |   true   |        scopes which the token needs to access         |
|     state     | string |  false   |        can add additional security to the flow        |

## Authorization Code Flow

### Endpoint `POST /api/v1/token`

### Request Body

> Request Body is expected to be send as JSON-Body

|   Parameter   |  Type  | Required |                      Description                      |
| :-----------: | :----: | :------: | :---------------------------------------------------: |
|   tenant_id   | string |   true   |    the tenant the operation should be performed on    |
|  grant_type   | string |   true   |                  authorization_code                   |
|     code      | string |   true   |                 required in code flow                 |
| redirect_uri  | string |   true   | the url to wich the service redirects after auth flow |
|   client_id   | string |   true   | client id of the oauth client performing the request  |
| client_secret | string | possibly |             required if PKCE is not used              |
| code_verifier | string | possibly |         required if client_secret is not used         |
|     scope     | string |   true   |        scopes which the token needs to access         |
|     state     | string |  false   |        can add additional security to the flow        |

## Refresh-Token Flow

### Endpoint `POST /api/v1/token`

### Request Body

> Request Body is expected to be send as JSON-Body

|   Parameter   |  Type  | Required |                      Description                      |
| :-----------: | :----: | :------: | :---------------------------------------------------: |
|   tenant_id   | string |   true   |    the tenant the operation should be performed on    |
|  grant_type   | string |   true   |                  authorization_code                   |
|     code      | string |   true   |                 required in code flow                 |
| redirect_uri  | string |   true   | the url to wich the service redirects after auth flow |
|   client_id   | string |   true   | client id of the oauth client performing the request  |
| client_secret | string | possibly |             required if PKCE is not used              |
| code_verifier | string | possibly |         required if client_secret is not used         |
|     scope     | string |   true   |        scopes which the token needs to access         |
|     state     | string |  false   |        can add additional security to the flow        |

## Responses

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
  "error_msg": "Bad Request" // Detailed Error Message
}
```

### Error Response 401

```json
{
  "success": false,
  "error_code": 401,
  "error_msg": "Unauthorized" // Detailed Error Message
}
```

### Error Response 500

```json
{
  "success": false,
  "error_code": 500,
  "error_msg": "Internal Server Error" // Detailed Error Message
}
```
