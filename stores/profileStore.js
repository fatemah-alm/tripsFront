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
      console.log(response.data);
      this.profiles = response.data;
    } catch (error) {
      console.log("ProfileStore -> fetchProfiles -> error", error);
    }
  };

  updateProfile = async (
    updatedProfile,
    uploadedImage,
    profileId,
    navigation
  ) => {
    try {
      const formData = new FormData();
      for (const key in updatedProfile)
        formData.append(key, updatedProfile[key]);

      formData.append("image", {
        type: uploadedImage.type,
        uri: uploadedImage.uri,
        name: uploadedImage.uri.split("/").pop(),
      });
      console.log("updatedProfile", formData);

      const res = await instance.put(`/profiles/${profileId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: (data, headers) => {
          return formData; // this is doing the trick
        },
      });
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
