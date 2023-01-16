module.exports = {
  apps: [
    {
      name: "FastifyLamungiAPI",
      exec_mode: "fork",
      instances: "1",
      script: "npm run build && node /home/desimir/actions-runner/fastifylamungiapi/fastify-architecture/fastify-architecture/dist/server.js", // your script
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
