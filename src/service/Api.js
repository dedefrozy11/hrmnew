import axios from "axios";
// import router from "../router";

export default () => {
  var api = axios.create({
    baseURL: `http://dfhrm.local/api/v2`,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "x-dreamfactory-api-key":
        "00e38717252dd485a36204bd9708a1e01597dea2ceed7a7642ea935b1d3be86c"
    }
  });

//   api.interceptors.response.use(
//     function(response) {
//       return response;
//     },
//     function(error) {
//       if (error.response.status == 401) {
//         window.localStorage.removeItem("user");
//         router.push("/login");
//       }
//       return Promise.reject(error);
//     }
//   );

  return api;
};
