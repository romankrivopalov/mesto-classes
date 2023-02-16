'use strict';

export default
class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }

      return Promise.reject(res.status)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }

      return Promise.reject(res.status)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }

      return Promise.reject(res.status)
    })
    .catch((err) => {
      console.log(err);
    })
  }
}