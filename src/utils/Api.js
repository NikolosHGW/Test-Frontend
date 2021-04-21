export default class Api {
  constructor(baseUrl, fakeData) {
    this._baseUrl = baseUrl;
    this._fakeData = fakeData;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}; ${res.statusText}`);
  }

  getData(endPoint) {
    return fetch(`${this._baseUrl}/${endPoint}`)
      .then(this._checkResponse);
  }

  getFakeData() {
    return Promise.resolve(this._fakeData);
  }
}
