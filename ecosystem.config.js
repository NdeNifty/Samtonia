module.exports = {
    apps: [{
      name: 'samtoniatravels', // Use the same name as your PM2 process name
      script: 'npm',
      args: 'run start', // Assuming your package.json has a "start" script to run Next.js
      watch: true,
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      }
    }]
  };
  