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
  deleteTrip = async (id, navigation) => {
    try {
      this.trips = this.trips.filter((trip) => trip._id !== id);
      const response = await instance.delete(`/trips/${id}`);
      // if (response) {
      // }
      navigation.replace("Home");
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

  // filterTrips = (trip) => {
  //   const tripList = this.trips.filter((tripa) => {
  //     tripa.owner.profile === trip.owner.profile ? (
  //       <Trip trip={tripa} key={tripa._id} />
  //     ) : null;
  //   });

  //   return tripList;
  // };

  likeTrip = async (id) => {
    this.likes.push(id);
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
