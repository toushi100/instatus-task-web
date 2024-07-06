import Axios from "axios";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

let client: any = Axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Accept-Language": "en",
  },
  responseType: "json",
});

export default client;
