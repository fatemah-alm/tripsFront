import { makeAutoObservable } from "mobx";

class ProfileStore {
  constructor() {
    makeAutoObservable(this);
  }
  profile = null;
}

const profileStore = new ProfileStore();
export default profileStore;
