exports.ListenerFactory = class {
  constructor(app, event, name, callBack) {
    this.app = app;
    this.event = event;
    this.name = name;
    this.calBack = -callBack;
  }

  listen() {
    return this.app.event(this.name, this.callBack);
  }
};
