const { app } = require("../../config/__init_app");
const { ListenerFactory } = require("../factory");
const { dropDowndata } = require("../../helpers/slashCommandData");

// const callBackFn =  async ({ body, ack, say }) => {
//     await ack();
//     await say(dropDowndata);
//   };
const MessageListener = new ListenerFactory(
  app,
  command,
  "/bot",
  async ({ body, ack, say }) => {
    await ack();
    await say(dropDowndata);
  }
);
MessageListener.listen();
