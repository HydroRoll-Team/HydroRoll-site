import axios from "axios";

const serviceAxios = axios.create({
  baseURL: "", 
  timeout: 3 * 1000, 
  withCredentials: false, 
});

export default serviceAxios;