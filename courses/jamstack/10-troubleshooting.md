---
title: Troubleshooting
parent: /courses/jamstack
date: 2022-10-24
modified: 2022-11-01
abstract:
  Some things to know if you get stuck with something.
---

## Astra DB

### Request failed with status code 403

1. Are your connection settings correct?
   Go to Organization Settings > Token Management to generate new tokens.
1. Do you have the correct Application Tokens and roles configured?
   This tutorial requires that your token has permissions for **API Admin User**.
1. Does your Keyspace exist in the DB?
1. Have you restricted public access and forgotten to configure your IP address?
   Perhaps your IP address has changed.

### Request failed with status code 404

1. Does the collection you want to write to exist?
1. If it is brand new then you will need to write to the collection first.

## Node modules

I had errors in my Netlify functions with the Astra DB client.
I didn't have exposure to the data.
I edited the dependency in the `node_modules` directory to output data to my server terminal.

## References

- [GitHub support][github]
- [Astra DB support][astra]
- [Netlify support][netlify]
- [Tailwind docs][tailwind]

[github]: https://support.github.com/
[astra]: https://docs.datastax.com/en/astra-serverless/docs/get-support.html
[netlify]: https://www.netlify.com/support/
[tailwind]: https://tailwindcss.com/docs/installation
