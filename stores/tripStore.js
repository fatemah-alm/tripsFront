import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class TripStore {
  trips = [];
  constructor() {
    makeAutoObservable(this);
  }

  deleteTrip = (id) => {
    try {
      this.trips = this.trips.filter((trip) => trip._id !== id);
      await instance.delete(`/api/trips/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
}

const tripStore = new TripStore();
export default tripStore;
