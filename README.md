# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

Start the Remix development asset server and the Express server by running:

```sh
npm run dev
```

This starts your app in development mode, which will purge the server require cache when Remix rebuilds assets so you don't need a process manager restarting the express server.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### Remix React-Quill Solution

Install Remix-Quill and Remix Utils and utilize Remix Utils' ClientOnly component to render Remix-Quill.

Look at my solution code or read my short blog [here](https://www.rickettstech.com)

- `build/`
- `public/build/`
