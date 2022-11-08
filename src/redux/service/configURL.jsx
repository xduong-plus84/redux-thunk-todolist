import axios from "axios";

const BASE_URL = "http://svcy.myclass.vn";

export let https = axios.create({
  baseURL: BASE_URL,
});
