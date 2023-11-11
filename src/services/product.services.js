import axios from "axios";

export const getProducts = (callback) => {
   axios.get("https://fakestoreapi.com/products").then((res) => {
      callback(res.data)
      console.log(res.data)
   }).catch((err) => {
      console.log(err)
   })
}