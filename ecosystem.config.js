module.exports = {
  apps: [
    {
      name: "FastifyLamungiAPI",
      exec_mode: "cluster",
      instances: "1",
      script: "npm run build && node dist/server.js", // your script
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
