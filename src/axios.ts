import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "http://localhost:5000",
});

export const unsplashApiInstance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID jK_2E3cjcOhP0nDJziUAVn-jnavM6TxD7UuxchyH-rI",
  },
});
