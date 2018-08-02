import _ from "lodash";
import { BASE_API_URL } from "../../config";

const fetchApi = (path, method, payloads = {}, type = "api") =>
  new Promise((resolve, reject) => {
    path = `${BASE_API_URL}/${path}`;
    const headers = {
      "Content-Type": "application/json; charset=UTF-8"
    };
    const body = JSON.stringify(payloads);
    if (type !== "auth") {
      const authenication = JSON.parse(localStorage.getItem("authenication"));
      if (!authenication) {
        reject();
      }
      headers["oh-access-token"] = authenication.access_token;
      if (payloads && payloads.rootAdmin === true) {
        delete payloads.rootAdmin;
      } else {
        headers["fitness"] = authenication.fitness;
      }
    }
    const objFetch = {
      method,
      headers,
      body
    };
    if (method === "GET" || method === "DELETE") {
      delete objFetch.body;
      if (!_.isUndefined(payloads) && !_.isEmpty(payloads)) {
        let params = "?";
        for (let key in payloads) {
          params += `${key}=${payloads[key]}&&`;
        }
        path += params;
      }
    }
    fetch(path, objFetch)
      .then(res => {
        return res.json();
      })
      .then(data => {
        const { error } = data;
        if (error) {
          reject(data);
        }
        resolve(data);
      });
  });

const _get = ({ path, payloads, type }) =>
  fetchApi(path, "GET", payloads, type);

const _put = ({ path, payloads, type }) =>
  fetchApi(path, "PUT", payloads, type);

const _post = ({ path, payloads, type }) =>
  fetchApi(path, "POST", payloads, type);

const _delete = ({ path, payloads, type }) =>
  fetchApi(path, "DELETE", payloads, type);

export default {
  _get,
  _put,
  _post,
  _delete
};
