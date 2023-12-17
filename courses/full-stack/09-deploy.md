---
title: Deployment
parent: /courses/full-stack
date: 2022-11-08
modified: 2022-11-14
abstract:
  In this chapter, you will deploy your application to AppEngine on Google Cloud Platform.
---

## Objectives

1. Serve the web application directly from the Express server.
1. Use a hosted version of MongoDB.
1. Host your app on AppEngine on Google Cloud Platform.

## Serve web app via Express

For production you will make your modern JavaScript files browser-friendly by building your app into
a servable thing. You will need to copy this set of built files across to the
server so that Express can serve your files as static instead of the React
development server serving it for you.

Start by creating a build script in the root of your project.

```bash:title=>./
touch build
chmod +x build
```

This script will build the web app and do a recursive copy of all the build files to the server.

```bash:title=./build
#!/bin/bash

echo "Building web application..."
cd web; npm run build; cp -R build ../server; cd ..;

echo "Done."
```

You can now specify where to serve the static files from in Express.

```js:title=./server/src/server.js
import path from 'path';
const __cwd = process.cwd();

app.use(express.static(path.join(__cwd, 'build')));
```

For any route that is not the api, serve the `index.html` file.
Remember that `__cwd` is a variable declared prior to this that will get the current working
directory: `process.cwd()`.

```js:title=./server/src/server.js
app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.join(__cwd, '../build/index.html'));
});
```

## MongoDB

### Create a cluster

- Register for free at [Mongo Atlas][mongo-atlas]
- Build a database by creating a shared cluster (this should be free)
- Select a cluster of your choice, generally the one closest to your users geographically
- Add a non-standard username and password (this is for your cluster which will
  be applicable to all your databases in this cluster)
  Keep these values for the next step (you can just paste the text into your server
  `.env` file as that is where we will be use it)

### Connect your application

- Go to Deployment > Database > click on the Connect button on your Cluster
- For now you can allow access from anywhere
- Click on Choose a connection method
- Connect your application
- Copy the database URL and update your `MONGODB_URL` var in `./env` for your server
- Update the URL with your username and password to reflect the account you created in the previous step
- You can click on Close
- Restart nodemon by typing in `rs` into the terminal to see if the connection works

```text:title=./server/.env
MONGODB_URL="mongodb+srv://<username>:<password>@cluster.subdomain.mongodb.net/?retryWrites=true&w=majority"
```

### Create your collection

- Go to Deployment > Database > Overview > click on the Connect button on your cluster
- Select the Connect with the MongoDB Shell option (you've already installed this so go to step 2)
- Enter the following commands:

```bash:title=mongosh
use stargazers-db
```

Populate some values.

```bash:title=mongosh
db.reviews.insertMany([
  {
    "slug": "bullies-social",
    "title": "Bullies Social",
    "abstract": "Bullies Social is where we encourage you to “B Social”! Come and socialize, talk and network."
  },
  {
    "slug": "cocoloko",
    "title": "Cocoloko",
    "abstract": "Located in a tropical garden in the heart of Grand Bay, the Cocoloko restaurant invites you to discover its world cuisine, as well as its famous cocktails in an exotic, relaxed setting, in the shade of coconut trees.",
  },
  {
    "slug": "island-babe",
    "title": "Island Babe",
    "abstract": "Island Babe Healthy food is Your favorite healthy daily hotspot situated at Pereybere, Mauritius.",
  },
  {
    "slug": "moods-skybar",
    "title": "Moods Skybar by Azur Paradise",
    "abstract": "Your truly unique Rooftop Experience! Moods Skybar prides itself with a panoramic view overseeing the Bay of Grand Baie. Situated within 5 minutes to major attractions, shopping centres, clinics, night clubs."
  },
  {
    "slug": "the-tavern",
    "title": "The Tavern",
    "abstract": "A traditional pub,  The Tavern already has a great reputation for first-class service, exceptional food and drink. A Superb atmosphere for a relaxed drink at the bar, and fabulous pub grub.",
  }
])
```

## Google Cloud

> **You will need GCP Billing enabled in order to use certain parts of GCP in order to deploy your application.**

```bash:title=>./server
touch app.yaml app-secrets.yaml
```

```yaml:title=./server/app-secrets.yaml
env_variables:
  ENV: 'production'
  MONGODB_USERNAME: ''
  MONGODB_PASSWORD: ''
  MONGODB_URL: 'mongodb+srv://<username>:<password>@cluster.subdomain.mongodb.net/?retryWrites=true&w=majority'
  MONGODB_NAME: 'stargazers-db'
  CORS_ORIGINS: ''
```

```yaml:title=./server/app.yaml
includes:
  - app-secrets.yaml
runtime: nodejs16
```

```text:title=./.gitignore
app-secrets.yaml
```

```js:title=./server/package.json
"scripts": {
  "start": "node src/server.js",
  "deploy": "gcloud app deploy"
}
```

- Go to [Google Cloud Platform][gcp], or GCP, and search for your Firebase project under the
  projects drop down next to the Google Cloud Platform title.
- Install the [Google Cloud CLI][gcloud-cli] which will include `gcloud`, `gsutil` and `bq` command-line tools.

```bash:title=>./
gcloud --version
```

Login via a window that opens up in your browser to authenticate and authorize
this application.

```bash:title=>./
gcloud auth login
```

Enable [Cloud Build][cloud-build] for your project. You need this for the `deploy` to work.
Copy your project ID from the welcome screen or inside the project and use it in the command below.

```bash:title=>./server
gcloud config set project stargazers
gcloud app deploy
```

- Select a region of your choice. See [App Engine pricing][pricing] for instances and
  estimates of costs for App Engine resources.
- Verify the targets and continue if you are happy to do so.
  Note the target url that was printed to the terminal for you.
- The files are uploaded to Google Cloud Storage and a new file `.gcloudignore` was created for you to add in Git.

## Deploy script

Create a deploy script in the root of your project.

```bash:title=>./
touch deploy
chmod +x deploy
```

This script will deploy the web app and server to GCP.

```bash:title=./build
#!/bin/bash

echo "Deploying server to Google AppEngine..."
cd server; npm run deploy;

echo "Done."
```

## Next steps

You may want to disable billing for your app when you are not using it so that
you don't get billed for it. Go to Navigation menu > Billing > Account Management >
Actions kebab > Disable billing.

## References

- [MongoDB Atlas][mongo-atlas] - Official documentation
- [Google Cloud Platform Console][gcp] - Official website
- [Google CLI][gcloud-cli] - Official website
- [Google Cloud Build][cloud-build] - Official website
- [Google AppEngine Pricing][pricing] - Official website

[mongo-atlas]: https://www.mongodb.com/atlas/database
[gcp]: https://console.cloud.google.com
[gcloud-cli]: https://cloud.google.com/sdk/docs/install
[cloud-build]: https://cloud.google.com/build
[pricing]: https://cloud.google.com/appengine/pricing
