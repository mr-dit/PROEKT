import { makeAutoObservable } from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL } from "../http";
import ProjectService from "../services/ProjectService";

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;
  message = ""; // Сообщение для отображения на странице
  showMessage = false; // Флаг для отображения/скрытия сообщения

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }

  setLoading(bool) {
    this.isLoading = bool;
  }

  setMessage(message) {
    this.message = message;
  }

  setShowMessage(bool) {
    this.showMessage = bool;
  }

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      // console.log(response)
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
		throw new Error(e.response?.data?.message);
    }
  }

  async registration(email, password) {
    try {
      const response = await AuthService.registration(email, password);
      // console.log(response)
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
		throw new Error(e.response?.data?.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser({});
    } catch (e) {
		throw new Error(e.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
		throw new Error(e.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async createProject() {
    try {
      const response = await ProjectService.create();
      console.log(response);
    } catch (e) {
		throw new Error(e.response?.data?.message);
    }
  }
}
