import axios from "axios";

export function getProducts() {
  return axios.get("https://dummyjson.com/products?limit=10");
}
