const { App } = require('@slack/bolt');
const { KEYS } = require('../constants/keys');

exports.app = new App({
  signingSecret: KEYS.SIGNING_SECRET,
  socketMode: true,
  token: KEYS.OAUTH_TOKEN,
  appToken:KEYS.APPTOKEN
});