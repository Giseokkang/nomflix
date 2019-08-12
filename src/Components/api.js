import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  params: {
    api_key: "b2e0ccc5b21b3b53128350309f57d23e",
    language: "en-US"
  }
});

export default api;
