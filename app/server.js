const { app } = require('./config/__init_app');

(async () => {
  // Start the app
  await app.start(process.env.PORT || 80);

  console.log('⚡️ Bolt app is running!');
})();

module.exports = app;