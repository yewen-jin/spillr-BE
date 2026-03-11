# spillr-BE

## start development server

To start the local developmenet server, run the following command:

```bash
npm run dev
```

This will initiate the express server and the socket.io server will listen on port 9090.

## fetching data

To fetch data from TVMeze for the first time or sync tv show data from TVMeze please use the following command:

```bash
npm run data-sync
```

data will be added to `/db/data/dev` and saved as tv-shows.js, seasons.js and episodes.js for direct usage
