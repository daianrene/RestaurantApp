import axios from "axios";

const BASE_URL = "https://localhost:7158/api/";

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + endpoint + "/";
  return {
    fetchAll: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    create: (newRecordObject) => axios.post(url, newRecordObject),
    update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    delete: (id) => axios.delete(url + id),
  };
};
