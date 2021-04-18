export default class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
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
}
