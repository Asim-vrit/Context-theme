import axios from "axios";

export const BASE_API_URL = "http://localhost:3000/";

export function getUsers() {
  return axios.get(BASE_API_URL + "users");
}

export function getSingleUser(id) {
  return axios.get(BASE_API_URL + "users/" + id);
}

export async function postUsers(data) {
  return axios.post(BASE_API_URL + "users", data);
}

export async function deleteUser(id) {
  return axios.delete(BASE_API_URL + "users/" + id);
}

export async function updateUser(id, data) {
  return axios.patch(BASE_API_URL + "users/" + id, data);
}
