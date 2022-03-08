import { makeAutoObservable } from "mobx";

class TripStore {
  constructor() {
    makeAutoObservable(this);
  }
  trips = [];
}

const tripStore = new TripStore();
export default tripStore;
