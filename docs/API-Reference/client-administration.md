---
sidebar_position: 5
---

# Client Administration

In the Client Administration section, we cover how third-party developers can register their applications and obtain access to resources protected by Ninka, similar to platforms like Spotify Developer Accounts or Google Developer Console.

## Overview

Ninka allows third-party developers to register their applications and obtain client credentials, enabling them to authenticate users and access protected resources within the system. This process facilitates secure integration with Ninka's authentication and authorization services.

## Client Registration

Third-party developers can register their applications with Ninka by providing necessary details such as application name, redirect URIs, and scopes. Upon successful registration, developers receive client credentials (client ID and client secret) that they can use to authenticate their applications with Ninka.

### Endpoints

- `/clients`: Endpoint for managing client applications.
  - `GET /clients`: Retrieve a list of registered client applications.
  - `POST /clients`: Register a new client application.
  - `PUT /clients/{clientId}`: Update an existing client application.
  - `DELETE /clients/{clientId}`: Delete a client application.

## Client Credentials

Client credentials (client ID and client secret) are generated during the client registration process and serve as authentication tokens for third-party applications. Developers must securely manage these credentials to authenticate their applications with Ninka.

### Endpoints

- `/clients/{clientId}/credentials`: Endpoint for managing client credentials.
  - `GET /clients/{clientId}/credentials`: Retrieve client credentials for a specific client application.
  - `POST /clients/{clientId}/credentials`: Generate new client credentials for a specific client application.
  - `DELETE /clients/{clientId}/credentials`: Revoke client credentials for a specific client application.

## OAuth2 Authorization

Registered client applications use OAuth2 authorization flows to authenticate users and obtain access tokens, allowing them to access protected resources on behalf of users. Ninka supports various OAuth2 authorization grant types to accommodate different application requirements.

### Endpoints

- `/oauth/authorize`: Endpoint for user authorization.
- `/oauth/token`: Endpoint for obtaining access tokens.
