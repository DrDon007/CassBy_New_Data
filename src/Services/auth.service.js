import axios from "axios";
import https from "https";
import { useHistory, useLocation } from "react-router-dom";

const API_URL = "https://j62nvrmxr6.execute-api.ap-south-1.amazonaws.com/dev/";

const isAuthenticated = false;

const register = (username, email, password, organization) => {
  return axios
    .post(API_URL + "signup", {
      username,
      email,
      password,
      organization,
    })
    .then((response) => {
      return response;
    });
};

const organization = (registeredName, pan, countryOfOrigin) => {
  return axios.post(API_URL + "Organizations", {
    registeredName,
    pan,
    countryOfOrigin,
  });
};

const login = (username, password) => {
  //let history = useHistory();

  return axios
    .post(API_URL + "login", {
      username,
      password,
    })
    .then((response) => {
      console.log(response.data.data);
      if (response.data.data) {
        localStorage.setItem("user", JSON.stringify(response.data.data.jwt));
        //isAuthenticated = true;
        //history.push("/");
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  isAuthenticated,
  register,
  login,
  organization,
  logout,
  getCurrentUser,
};
