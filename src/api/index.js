import _ from "lodash";
import { configVariable } from "../../config";

const fetchApi = (path, method, payloads, type = "api") =>
  new Promise((resolve, reject) => {
    path = `${configVariable.BASE_API_URL}/${path}`;
    if (type === "auth") {
      // debugger;
      fetch(path, {
        method: method,
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(payloads)
      })
        .then(res => {
          return res.json();
        })
        .then(data => {
          const { error } = data;
          if (error) {
            reject();
          }
          resolve(data);
        });
    }
  });

const _get = ({ path, payloads, type }) =>
  fetchApi(path, "GET", payloads, type);

const _put = ({ path, payloads, type }) =>
  fetchApi(path, "PUT", payloads, type);

export default {
  _get,
  _put
};
