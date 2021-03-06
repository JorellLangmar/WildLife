import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    console.log(userInfo);
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getItems() {
    return service
      .get("/api/items")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getAll() {
    return service
    .get("/api/animal")
    .then((res) => res.data)
    .catch(errorHandler);
  },

  createAnimal(data) {
    return service
    .post("/api/animal", data)
    .then((res) => res.data)
    .catch(errorHandler)
  },

  editAnimal(id, data) {
    return service
    .patch(`/api/animal/${id}`, data)
    .then((res) => res.data)
    .catch(errorHandler)
  },

  editUser(id, data) {
    console.log("id ==>", id);
    console.log("data ==>", data);
    return service
    .patch(`/api/user/${id}`, data)
    .then((res) => res.data)
    .catch(errorHandler)
  },

  getSome(data) {
    // console.log(data);
    return service
    .get(`/api/animal/filter/${data}`)
    .then((res) => res.data)
    .catch(errorHandler)
  },

  getSomeId(data) {
    // console.log(data);
    return service
    .get(`/api/animal/filterId/${data}`)
    .then((res) => res.data)
    .catch(errorHandler)
  },

  getOne(endPoint, id) {
    return service.get(endPoint + id);
  },

  deleteAnimal(id) {
    return service.delete("/api/animal/" + id);
  }
};
