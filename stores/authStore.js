import { makeAutoObservable } from "mobx";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;
}

const authStore = new AuthStore();
export default authStore;
