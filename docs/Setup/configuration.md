---
sidebar_position: 3
---

# Configuration

Ninka currently supports Planetscale as its database, but we are actively working to enable compatibility with more databases in the future.

## Recommended Databases

We strongly recommend the following databases to get started quickly:

- **Planetscale**: [Planetscale](https://www.planetscale.com/) offers a powerful and scalable database solution. Visit their website for more information and to sign up.
- **Upstash Redis**: [Upstash Redis](https://upstash.com/) provides a managed Redis database solution that is easy to use and deploy. Visit their website to get started.

These databases are ideal for quickly setting up and deploying Ninka with minimal configuration.

## Environment Variables

Set the following environment variables to configure Ninka:

- **PLANETSCALE_HOST**: Hostname of your Planetscale instance.
- **PLANETSCALE_USERNAME**: Your Planetscale username.
- **PLANETSCALE_PASSWORD**: Your Planetscale password.
- **PLANETSCALE_URI**: Full Planetscale URI to connect to your Planetscale database.
- **ADMIN_PORT**: Port on which the admin interface should listen.
- **ADMIN_USERNAME**: Default admin username.
- **ADMIN_PASSWORD**: Default admin password.
- **ADMIN_DASHBOARD_ENABLED**: Set to `true` if the admin dashboard should be started, or `false` otherwise.
- **REDIS_URI**: Full URI to your Redis database. Currently, our only supported in-memory database while we work on supporting more.

Make sure to populate these variables with the appropriate values according to your environment and requirements.

## Example Configuration

Here's an example `.env` file with the necessary variables configured for a Planetscale setup:

```plaintext
PLANETSCALE_HOST=example-planetscale-host
PLANETSCALE_USERNAME=your-username
PLANETSCALE_PASSWORD=your-password
PLANETSCALE_URI=planetscale-uri
ADMIN_PORT=8080
ADMIN_USERNAME=admin
ADMIN_PASSWORD=adminpassword
ADMIN_DASHBOARD_ENABLED=true
REDIS_URI=redis-uri
```

## Deployment Method

If you're using a deployment method such as Docker or Kubernetes, ensure that these environment variables are set accordingly within your deployment configuration.

## Additional Notes

Keep in mind that Ninka currently supports Planetscale as its primary database, and Redis as its only supported in-memory database. Stay tuned for updates as we continue to expand compatibility with more databases.
