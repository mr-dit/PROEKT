import api from "../http/index";
// import { AxiosResponse } from "axios";
// import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
  // static async login(email, password): {
  // return api.post('/login', {email, password})}
  static async login(email, password) {
    return api.post("/login", { email, password });
  }
  static async registration(email, password) {
    return api.post("/registration", { email, password });
  }

  static async logout() {
    return api.post("/logout");
  }

  static async getAvatar() {
    return api.get("/getAvatar");
  }

  static async setAvatar(avatar) {
    let data = new FormData();
    data.append('avatar', avatar)

    return api.post(
      `/uploadAvatar`,
      data,
      {
        headers: {
          'Content-Type': `multipart/form-data`
        },
      }
    );
  }
}
