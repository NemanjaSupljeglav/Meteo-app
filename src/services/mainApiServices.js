import axios from "axios";

export const postFunc = async (url, body) => {
  return axios
    .get(url)
    .then(response => {
      return response?.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
