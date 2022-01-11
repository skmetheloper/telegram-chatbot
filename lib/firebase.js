const { DATABASE_URL, DATABASE_SECRET } = process.env;
const { default: axios } = require('axios');

class Reference {
  constructor(path) {
    this._url = new URL(DATABASE_URL);
    this._url.pathname = this._path.join('/');
    this._url.searchParmas.append('auth', DATABASE_SECRET);
  }

  get() {
    return axios.get(this._url.toString())
                .then(({ data }) => data);
  }

  push(payload) {
    return axios.post(this._url.toString(), payload)
                .then(({ data }) => data);
  }

  update(payload) {
    return axios.patch(this._url.toString(), payload)
                .then(({ data }) => data);
  }

  set(payload) {
    return axios.put(this._url.toString(), payload)
                .then(({ data }) => data);
  }

  remove() {
    return axios.delete(this._url.toString())
                .then(({ data }) => data);
  }
}

const database = {
  ref(...path) {
    return new Reference(path);
  }
};

module.exports = {
  database,
};
