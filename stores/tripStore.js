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
}

const tripStore = new TripStore();
export default tripStore;
