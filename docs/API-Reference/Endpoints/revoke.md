---
sidebar_position: 2
---

# Revoke

## Token revocation endpoint

### Endpoint `POST /api/v1/revoke`

### Request Body

> Request Body is expected to be send as JSON-Body

| Parameter  |  Type  | Required |                   Description                   |
| :--------: | :----: | :------: | :---------------------------------------------: |
| tenant_id  | string |   true   | the tenant the operation should be performed on |
| token_type | string |   true   |          refresh_token or access_token          |
|   token    | string |   true   |             the token to be revoked             |

## Responses

### Success Response 200

```json
{
  "success": true,
  "data": "Token revoked"
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

### Error Response 500

```json
{
  "success": false,
  "error_code": 500,
  "error_msg": "Internal Server Error" // Detailed Error Message
}
```
