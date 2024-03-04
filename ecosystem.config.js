module.exports = {
    apps: [{
      name: 'samtoniatravels',
      script: 'npm',
      args: 'run start', // Assumes your package.json has a "start" script for Next.js
      cwd: '/root/actions-runner/_work/Samtonia/Samtonia',
      watch: ['.'], // Watch all files for development; consider limiting this in production
      ignore_watch: ['node_modules', '.next'], // Ignore watching node_modules and .next build directory
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      }
    }]
  };
  