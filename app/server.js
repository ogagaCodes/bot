const { app } = require('./config/__init_app');
const MessageListener = require('../app/src/listeners/command.listener');

MessageListener.listen;
(async () => {
  // Start the app
  await app.start(process.env.PORT || 80);

  console.log('⚡️ Bolt app is running!');
})();

module.exports = app;