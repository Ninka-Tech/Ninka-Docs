---
sidebar_position: 4
---

# Multitenancy

In the Multitenancy section, we cover how multitenancy is supported in Ninka and how developers can create and manage tenants within the system.

## Overview

Multitenancy is a core feature of Ninka, allowing developers to host their own cloud authentication provider with a single Ninka instance. This enables developers to create multiple tenants within the system, each with its own isolated environment and resources.

## Tenants

Tenants are isolated environments within the Ninka instance, each representing a separate entity or organization. Developers can create and manage tenants to provide authentication services to multiple clients or applications.

### Endpoints

- `/tenants`: Endpoint for managing tenants.
  - `GET /tenants`: Retrieve a list of tenants.
  - `POST /tenants`: Create a new tenant.
  - `PUT /tenants/{id}`: Update an existing tenant.
  - `DELETE /tenants/{id}`: Delete a tenant.

## Tenant Configuration

Tenants can be configured with custom settings and parameters to meet the specific requirements of each organization. Administrators can define authentication policies, user permissions, and other settings at the tenant level.

### Endpoints

- `/tenants/{id}/settings`: Endpoint for managing tenant settings.
  - `GET /tenants/{id}/settings`: Retrieve the settings for a specific tenant.
  - `PUT /tenants/{id}/settings`: Update the settings for a specific tenant.

## Tenant Administration

Administrators have full control over tenant administration, including creating, updating, and deleting tenants, as well as managing their configurations and settings.

### Endpoints

- `/tenants/{id}/admins`: Endpoint for managing tenant administrators.
  - `GET /tenants/{id}/admins`: Retrieve a list of administrators for a specific tenant.
  - `POST /tenants/{id}/admins`: Add a new administrator to a specific tenant.
  - `DELETE /tenants/{id}/admins/{adminId}`: Remove an administrator from a specific tenant.
