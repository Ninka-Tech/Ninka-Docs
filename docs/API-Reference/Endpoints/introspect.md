---
sidebar_position: 3
---

# Introspect

## Token introspection endpoint

### Endpoint `POST /api/v1/introspect`

### Request Body

> Request Body is expected to be send as JSON-Body

|    Parameter    |  Type  | Required |                           Description                           |
| :-------------: | :----: | :------: | :-------------------------------------------------------------: |
| organization_id | string |   true   |      the organization the operation should be performed on      |
|      token      | string |   true   |                  the token to be introspected                   |
|      scope      | string |  flase   | scopes that should be granted to the token to access a resource |

## Responses

### Success Response 200

```json
{
  "success": true,
  "data": {
    "active": true,
    "scope": "all scopes granted to the token",
    "client_id": "granted for this client",
    "account_id": "granted for this account",
    "organization_id": "granted for this organization"
  }
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
