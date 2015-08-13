let Base = require('../models/base');

class Mashes extends Base {
  constructor() {
    super();

    this.url = 'http://localhost:8882/rest/mash';
  }
}

module.exports = Mashes;
