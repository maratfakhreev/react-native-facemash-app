class Base {
  fetch() {
    return new Promise((resolve, reject) => {
      fetch(this.url)
        .then(result => result.json())
        .then(result => resolve(result));
    });
  }
}

module.exports = Base;
