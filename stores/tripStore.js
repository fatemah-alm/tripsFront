import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import Trip from "../components/Trip";
class TripStore {
  constructor() {
    makeAutoObservable(this);
  }
  trips = [];

  createTrip = async (newTrip, uploadedImage, profileId, navigation) => {
    try {
      const formData = new FormData();
      for (const key in newTrip) formData.append(key, newTrip[key]);
      if (uploadedImage) {
        formData.append("image", {
          type: uploadedImage.type,
          uri: uploadedImage.uri,
          name: uploadedImage.uri.split("/").pop(),
        });
      }

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
        "🚀 ~ file: TripStore.js ~ line 16 ~ TripStore ~ createTrip= ~ error",
        error
      );
    }
  };
  likes = [];

  fetchTrips = async () => {
    try {
      const tripResponse = await instance.get("/trips");
      this.trips = tripResponse.data;
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

  filterTrips = (trip) => {
    const tripList = this.trips.filter((tripa) => {
      tripa.owner.profile === trip.owner.profile ? (
        <Trip trip={tripa} key={tripa._id} />
      ) : null;
    });

    return tripList;
  };

  likeTrip = async (id) => {
    this.likes.push(id);
  };
}

const tripStore = new TripStore();
tripStore.fetchTrips();

export default tripStore;
