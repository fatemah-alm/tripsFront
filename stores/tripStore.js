import { makeAutoObservable } from "mobx";
import { instance } from "./instance";




class TripStore {
  constructor() {
    makeAutoObservable(this);
  }
  trips = [];


  createTrip = async (newTrip, profileId, navigation) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);

      const response = await instance.post(
        `/profiles/${profileId}/trip`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          transformRequest: (data, headers) => {
            return formData; // this is doing the trick
          },
        }
      );
      this.trips.push(response.data);
      navigation.goBack();
    } catch (error) {
      console.log(
        "🚀 ~ file: productStore.js ~ line 16 ~ ProductStore ~ createProduct= ~ error",
        error
      );
    }
  };
  likes = [];

  fetchTrips = async () => {
    try {
      const tripResponse = await instance.get("/trips");
      this.trips = tripResponse.data;
      console.log(tripResponse.data);
    } catch (error) {
      console.log("error message", error);
    }
  };
  deleteTrip = async (id) => {
    try {
      this.trips = this.trips.filter((trip) => trip._id !== id);
      await instance.delete(`/api/trips/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  updateTrip = async (updatedTrip, id) => {
    try {
      const res = await instance.put(`/api/trips/${id}`, updatedTrip);
      this.trips = this.trips.map((trip) =>
        trip._id === id ? res.data : trip
      );
    } catch (error) {
      console.log(error);
    }
  };
  likeTrip = async (id) => {
    this.likes.push(id);
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
