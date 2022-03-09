import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class ProfileStore {
  constructor() {
    makeAutoObservable(this);
  }
  profiles = [];

  getProfiles = async () => {
    try {
      const response = await instance.get("/profiles");
      this.profiles = response.data;
    } catch (error) {
      console.log("ProfileStore -> fetchProfiles -> error", error);
    }
  };

  updateProfile = async (updatedProfile, profileId, navigation) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);

      const res = await instance.put(`/profiles/${profileId}`, formData);
      this.profiles = this.profiles.map((profile) =>
        profile._id === profileId ? res.data.payload : profile
      );
      navigation.replace("Profile");
    } catch (error) {
      console.log("ProfileStore -> updateProfile -> error", error);
    }
  };
}

const profileStore = new ProfileStore();
profileStore.getProfiles();
export default profileStore;
