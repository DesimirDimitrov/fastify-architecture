# Fastify Architecture

This project was bootstrapped with [Fastify-CLI](https://www.npmjs.com/package/fastify-cli).

```bash
npm install fastify-cli --global
fastify generate . --lang=ts
```

To learn Fastify, check out the [Fastify documentation](https://www.fastify.io/docs/latest/).


# Installation

```bash
npm install
```

## Docker (only locally for VS Code)

If you prefer to use Docker, there is a prepared [Dev Container](https://code.visualstudio.com/docs/devcontainers/containers#_installation) for VS Code.

## WSL (with Docker)

If you prefer to use WSL, just follow the steps in the official documentations:

1. [Install WSL](https://learn.microsoft.com/en-us/windows/wsl/install) (Required)
2. [Install Docker](https://docs.docker.com/engine/install/ubuntu/) (Optional - use it if you want Docker inside WSL)
- Since WSL doesn't include `systemd`, you should create a [script](https://github.com/bowmanjd/docker-wsl) to easily start the service:
```bash
nohup sudo -b dockerd < /dev/null > dockerd.log 2>&1
```
3. [Install Remote Development extension pack](https://code.visualstudio.com/docs/remote/wsl#_installation) (Required only if you are using VS Code)
4. Use the already prepared [Dev Container](https://code.visualstudio.com/docs/devcontainers/containers#_installation)

# Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm start`

For production mode

### `npm run test`

Run the test cases.
