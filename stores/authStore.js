import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  signup = async (userData, navigation) => {
    try {
      const response = await instance.post("/user/signup", userData);
      const { token } = response.data;
      this.setUser(token);
      navigation.replace("Profile");
    } catch (error) {
      console.log(error);
    }
  };

  setUser = async (token) => {
    try {
      const decodedToken = decode(token);
      this.user = decodedToken;
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
export default authStore;
