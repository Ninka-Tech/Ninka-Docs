---
sidebar_position: 3
---

# Authorization

In the Authorization section, we cover the custom Group/User Permission-system used by the Authserver for managing access control.

## Overview

The Authserver implements a custom Group/User Permission-system to manage access control and permissions for users and groups. This system allows administrators to define fine-grained permissions and assign them to users and groups, ensuring secure access to resources.

## Permissions

Permissions are granular access rights that define what actions users or groups can perform within the system. The Authserver allows administrators to create, manage, and assign permissions to users and groups based on their roles and responsibilities.

### Endpoints

- `/permissions`: Endpoint for managing permissions.
  - `GET /permissions`: Retrieve a list of permissions.
  - `POST /permissions`: Create a new permission.
  - `PUT /permissions/{id}`: Update an existing permission.
  - `DELETE /permissions/{id}`: Delete a permission.

## Groups

Groups are collections of users with similar roles or responsibilities. Administrators can create groups and assign permissions to them, making it easy to manage access control for multiple users simultaneously.

### Endpoints

- `/groups`: Endpoint for managing groups.
  - `GET /groups`: Retrieve a list of groups.
  - `POST /groups`: Create a new group.
  - `PUT /groups/{id}`: Update an existing group.
  - `DELETE /groups/{id}`: Delete a group.

## Users

Users represent individuals who interact with the system. Administrators can assign permissions directly to users or manage their access control through groups.

### Endpoints

- `/users`: Endpoint for managing users.
  - `GET /users`: Retrieve a list of users.
  - `POST /users`: Create a new user.
  - `PUT /users/{id}`: Update an existing user.
  - `DELETE /users/{id}`: Delete a user.
