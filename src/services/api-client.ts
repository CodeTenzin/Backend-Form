import axios, { CanceledError } from "axios";

// seperating backend calls from UI

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // headers: {
  //     'api-key': ""
  // }
});

export { CanceledError };
