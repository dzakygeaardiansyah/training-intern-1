module.exports = {
  apps: [
    {
      name: "training-intern",
      script: "C:\\Windows\\System32\\cmd.exe",
      args: "/c npm run serve:pm2",
      cwd: "C:\\MID PROJECT\\training-intern-1",
      autorestart: true
    }
  ]
};