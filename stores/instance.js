import axios from "axios";

// export const baseUrl = "http://localhost:8080";
export const baseUrl = "http://192.168.150.88:8080";
// export const baseUrl = "http://192.168.8.163:8080";
export const instance = axios.create({
  baseURL: `${baseUrl}/api`,
});
