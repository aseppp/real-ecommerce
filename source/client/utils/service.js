import axios from "axios";

class Service {
  constructor() {
    let service = axios.create();
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
    if (typeof window !== "undefined") {
      this.token = localStorage.getItem("token");
    }
  }

  handleSuccess(response) {
    return response;
  }

  handleError = (error) => {
    console.log("-ERROR-", error);
    // handle network error
    if (
      error?.message === "Network request failed" ||
      error?.message === "Network Error"
    ) {
      alert("Network Error!", "Silakan periksa koneksi Anda dan coba kembali.");
    }

    // handle error access
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location = "/auth";
    }
    return Promise.reject(error);
  };

  get(path, params, callback) {
    return this.service
      .get(path, {
        params,
        headers: {
          Authorization: `${this.token}`,
        },
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }

  put(put, payload, callback) {
    return this.service
      .request({
        method: "PUT",
        url: put,
        responseType: "json",
        data: payload,
        headers: {
          Authorization: `${this.token}`,
        },
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }

  postAuth(path, payload, callback) {
    return this.service
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload,
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }
  post(path, payload, callback) {
    return this.service
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload,
        headers: {
          Authorization: `${this.token}`,
        },
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }

  postMultipart(path, payload, callback) {
    console.log(payload);
    return this.service
      .request({
        method: "POST",
        url: path,
        data: payload,
        headers: {
          "x-private": "false",
          Authorization: `${this.token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }

  delete(path, payload, callback) {
    return this.service
      .request({
        method: "DELETE",
        url: path,
        responseType: "json",
        data: payload,
        headers: {
          Authorization: `${this.token}`,
        },
      })
      .then((response) =>
        callback ? callback(response.status, response.data) : response
      );
  }
}

export default new Service();
