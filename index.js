import axios from "axios";

export const fetchData = (fn) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((resp) => fn(resp.data));
};

export const returnPromise = (fn) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
  };

  export const notFoundTest = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/todos/x")
  };
