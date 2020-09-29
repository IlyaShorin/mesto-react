class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => res.json());
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => res.json());
  }
  updateUserInfo(obj) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      body: JSON.stringify({
        name: obj.name,
        about: obj.about,
      }),
      headers: this._headers,
    }).then((res) => res.json());
  }
  addNewCard(obj) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      body: JSON.stringify({
        name: obj.name,
        link: obj.link,
      }),
      headers: this._headers,
    }).then((res) => res.json());
  }
  changeLikeCardStatus(id, liked) {
    return fetch(`${this._baseUrl}/cards/likes/${id}`, {
      method: liked ? "PUT" : "DELETE",
      headers: this._headers,
    }).then((res) => res.json());
  }
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => res.json());
  }
  updateAvatar(obj) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      body: JSON.stringify({
        avatar: obj.avatar,
      }),
      headers: this._headers,
    }).then((res) => res.json());
  }
}

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-14",
  headers: {
    authorization: "7d44fa7e-04ef-41d7-b07e-efc6bd06cf53",
    "Content-Type": "application/json",
  },
});

export default api;
