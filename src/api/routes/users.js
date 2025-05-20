import axios from "axios";

export const BASE_API_URL = "http://localhost:3000/";

export function getUsers() {
  return axios.get(BASE_API_URL + "users");
}
export async function postUsers(data) {
  return axios.post(BASE_API_URL + "users", data);
}
