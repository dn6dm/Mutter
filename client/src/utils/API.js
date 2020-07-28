import axios from "axios";

export default axios.create({
  baseURL: "http://54.161.9.68/api/posts/",
  responseType: "json",
});
