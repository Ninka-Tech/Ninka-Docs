---
sidebar_position: 4
---

# Multitenancy

In the Multitenancy section, we cover how multitenancy is supported in Ninka and how developers can create and manage organizations within the system.

## Overview

Multitenancy is a core feature of Ninka, allowing developers to host their own cloud authentication provider with a single Ninka instance. This enables developers to create multiple organizations within the system, each with its own isolated environment and resources.

## Organizations

organizations are isolated environments within the Ninka instance, each representing a separate entity or organization. Developers can create and manage organizations to provide authentication services to multiple clients or applications.

### Endpoints

- `/organizations`: Endpoint for managing organizations.
  - `GET /organizations`: Retrieve a list of organizations.
  - `POST /organizations`: Create a new organization.
  - `PUT /organizations/{id}`: Update an existing organization.
  - `DELETE /organizations/{id}`: Delete a organization.

## Organization Configuration

organizations can be configured with custom settings and parameters to meet the specific requirements of each organization. Administrators can define authentication policies, user permissions, and other settings at the organization level.

### Endpoints

- `/organizations/{id}/settings`: Endpoint for managing organization settings.
  - `GET /organizations/{id}/settings`: Retrieve the settings for a specific organization.
  - `PUT /organizations/{id}/settings`: Update the settings for a specific organization.

## Organization Administration

Administrators have full control over organization administration, including creating, updating, and deleting organizations, as well as managing their configurations and settings.

### Endpoints

- `/organizations/{id}/admins`: Endpoint for managing organization administrators.
  - `GET /organizations/{id}/admins`: Retrieve a list of administrators for a specific organization.
  - `POST /organizations/{id}/admins`: Add a new administrator to a specific organization.
  - `DELETE /organizations/{id}/admins/{adminId}`: Remove an administrator from a specific organization.
