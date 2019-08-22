import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-1112c.firebaseio.com/"
});

export default instance;
