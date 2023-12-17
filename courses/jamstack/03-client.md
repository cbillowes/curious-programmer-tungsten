---
title: Connect to Astra DB using the client
parent: /courses/jamstack
date: 2022-10-23
modified: 2022-11-01
abstract:
  Learn more about the Astra DB client, how to create it and how to pass environment variables to it.
---

## Objectives

1. Understand what the Astra DB Client is.
1. Understand the need to pass environment variables to the client.
1. Create the client in JavaScript.

## Astra DB Client

You will need to be able to connect to our Astra DB collection.
To do this you will create an Astra Client that will use your
secret environment variables file to pass in the **ID**, **region** and **app token**.

When you get the collection, you need to provide the **keyspace** and the **collection**
name (in this case it's the hardcoded - :unamused: - `sag_todos` but this can be configurable).

```js:title=./netlify/functions/astraClient.js
const { createClient } = require("@astrajs/collections");

let astraClient = null;

const getAstraClient = async () => {
  if (astraClient === null) {
    astraClient = await createClient(
      {
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
      },
      30000
    );
  }
  return astraClient;
};

const getCollection = async () => {
  const documentClient = await getAstraClient();
  return documentClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection("sag_todos");
};

module.exports = { getAstraClient, getCollection };
```
