import { action, computed, observable } from "mobx";
import { http } from "../utils/http";

export class Authentication {
  @observable email = '';
  @observable profile = {};
  @observable dataUser = '';
  @observable dataUserID = '';

  constructor(context) {
    this.context = context;
  }

  @computed
  get userData() {
    if (!this.context.accessToken) {
      return {
        id: '',
        role: '',
        email: '',
        fullname: '',
        phone_number: ''

      };
    }
    return JSON.parse(atob(this.context.accessToken.split('.')[1]));
  }

  @action
  async login({ email, password }) {
    await http.post('/authorization/login').send({
      email,
      password,

    }).then(res => {
      if (res.body.user.role !== 'SUPERUSER' || res.body.user.role !== 'SUPERADMIN') {
        localStorage.setItem('sppbeId', res.body.user['sppbeId']);
      }

      if (res.body.user.role === 'SUPERADMIN') {
        localStorage.setItem('morId', res.body.user['morId']);
        this.morID = res.body.user.morId
      }

      this.context.setToken(res.body.token, '')

      this.dataUser = res.body.user.role;
      localStorage.setItem('role', res.body.user.role);
      return res
    }).catch(err => {
      throw err
    })
  }

  @action
  logout() {
    this.context.setToken('');
    localStorage.removeItem('role');
  }
}


// import {computed, makeAutoObservable} from "mobx";

// export class Authentication {
//   ctx;

//   accessToken = '';

//   refreshToken = '';

//   constructor(ctx) {
//     this.ctx = ctx;
//     makeAutoObservable(this);
//   }

//   get isLoggedIn() {
//     return !!this.refreshToken;
//   }

//   setInitialToken(accessToken, refreshToken) {
//     this.setToken(accessToken, refreshToken);
//   }

//   setToken(accessToken, refreshToken) {
//     this.accessToken = accessToken;
//     this.refreshToken = refreshToken;
//   }
// }
