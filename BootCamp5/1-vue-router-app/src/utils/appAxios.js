import axios from "axios";
// Tüm projede axiosu kullanmak için burda oluşturup mainte tanımlıyoruz.
export const appAxios = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    tokenX: "myToken",
    "Content-Type": "application/json",
  },
});
