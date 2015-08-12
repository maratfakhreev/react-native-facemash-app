let Emitter = require('EventEmitter');

const EMITTER = new Emitter();

class EmitterFacade {
  static emit(event, ...agrs) {
    EMITTER.emit(event, ...agrs);
  }

  static on(event, listener) {
    EMITTER.on(event, listener);
  }

  static once(event, listener) {
    EMITTER.once(event, listener);
  }

  static off(events) {
    EMITTER.removeAllListeners(events);
  }

  static offListener(event, listener) {
    EMITTER.removeListener(event, listener);
  }
}

module.exports = EmitterFacade;
