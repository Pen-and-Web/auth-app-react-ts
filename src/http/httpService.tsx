import axios from "axios";

const baseUrl = "http://localhost:8000";

export function registerUser(data: any) {
  var url = `${baseUrl}/register`;
  return axios.post(url, data);
}

export function loginUser(data: any) {
  var url = `${baseUrl}/login`;
  return axios.post(url, data);
}

export function reset(data: any) {
  var url = `${baseUrl}/resetPassword`;
  return axios.post(url, data);
}

export function forget(data: any) {
  var url = `${baseUrl}/forgetPassword`;
  return axios.post(url, data);
}
