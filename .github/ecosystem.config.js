module.exports = {
    apps : [{
      name   : "SamtoniaApp",
      script : "npm",
      args   : "run start",
      cwd    : "/root/Samtonia",
      watch  : true,
      env: {
        "NODE_ENV": "production",
        }
    }]

  };