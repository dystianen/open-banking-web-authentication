import {computed, makeAutoObservable} from "mobx";

export class Authentication {
  ctx;

  accessToken = '';

  refreshToken = '';

  constructor(ctx) {
    this.ctx = ctx;
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!this.refreshToken;
  }

  setInitialToken(accessToken, refreshToken) {
    this.setToken(accessToken, refreshToken);
  }

  setToken(accessToken, refreshToken) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
  }
}
