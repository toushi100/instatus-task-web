import Axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

let client: any = Axios.create({
  baseURL: "http://127.0.0.1:3456",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "en",
  },
  responseType: "json",
});

export default client;
