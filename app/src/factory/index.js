exports.ListenerFactory = class {
  constructor(app, eventData,  name, callBack) {
    this.app = app;
    this.eventData = eventData;
    this.name = name;
    this.callBack = -callBack;
  }

  listen() {
    return this.app[this.eventData](this.name, this.callBack);
  }
};
