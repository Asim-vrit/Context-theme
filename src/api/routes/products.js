import axios from "axios";

export function getProducts() {
  return axios.get("https://fakestoreapi.com/products");
}

export function getSingleProduct(id) {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
}
