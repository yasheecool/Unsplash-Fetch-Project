import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    "Accept-Version": "v1",
    Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
  },
});

export default customFetch;
