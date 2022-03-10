import axios from "axios";
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
// import axios from "axios";

class TripStore {
  constructor() {
    makeAutoObservable(this);
  }
  trips = [];

  fetchTrips = async () => {
    try {
      const tripResponse = await axios.get("http://localhost:8080/api/trips");
      this.trips = tripResponse.data;
      console.log(tripResponse.data);
    } catch (error) {
      console.log("error message", error);
    }
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
