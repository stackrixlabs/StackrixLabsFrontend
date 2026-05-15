## Running the code

Run `yarn install` to install the dependencies.

Run `yarn dev` to start the development server.

Run `yarn deploy` to deploy it to GitHub Pages.

The app is configured to run from `/src`, so the deployed site should be served from that path.

## Running with Docker

Build and run the production container:

```sh
docker compose up --build web
```

The app will be available at `http://localhost:8080/src/`. Set `PORT` to change the host port:

```sh
PORT=3000 docker compose up --build web
```

Run the Vite development server in Docker:

```sh
docker compose --profile dev up --build dev
```

The development server will be available at `http://localhost:5173/src/`. Set `DEV_PORT` to change the host port.
  
