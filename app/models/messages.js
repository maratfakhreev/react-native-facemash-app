let Base = require('../models/base');

class Messages extends Base {
  constructor() {
    super();

    this.url = 'http://localhost:8882/rest/messages';
  }
}

module.exports = Messages;
