---
sidebar_position: 2
---

# Authentication

In the Authentication section, we cover the process of authenticating users with the Authserver using OAuth2 and OIDC.

## Overview

The Authserver supports industry-standard authentication protocols including OAuth2 and OpenID Connect (OIDC). OAuth2 is used for authorization and OIDC for authentication, providing secure access to resources and user authentication.

## OAuth2

OAuth2 is an industry-standard protocol for authorization, allowing applications to obtain limited access to a user's resources without exposing their credentials. The Authserver implements OAuth2 to provide access tokens that clients can use to access protected resources on behalf of users.

### Endpoints

- `/oauth/token`: Endpoint for obtaining access tokens.
- `/oauth/authorize`: Endpoint for user authorization.
- `/oauth/revoke`: Endpoint for revoking access tokens.
- `/oauth/introspect`: Endpoint for token introspection.

## OpenID Connect (OIDC)

OIDC is an authentication layer built on top of OAuth2, providing identity verification for users. The Authserver implements OIDC to provide authentication services and identity information about authenticated users to clients.

### Endpoints

- `/oidc/.well-known/openid-configuration`: OIDC Discovery document.
- `/oidc/token`: OIDC token endpoint.
- `/oidc/userinfo`: OIDC userinfo endpoint.
