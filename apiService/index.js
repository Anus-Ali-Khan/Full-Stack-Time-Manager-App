import axios from "axios";

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASEURL,
    });
    // console.log(process.env.NEXT_PUBLIC_BASEURL);

    // Interceptor to add Authorization header
    // this.api.interceptors.request.use(
    //   config => {
    //     const token = localStorage.getItem('authToken'); // Replace 'authToken' with your token key
    //     if (token) {
    //       config.headers['Authorization'] = `Bearer ${token}`;
    //     }
    //     return config;
    //   },
    //   error => {
    //     return Promise.reject(error);
    //   }
    // );
  }

  // Example method to get data
  async get(endpoint) {
    try {
      const response = await this.api.get(endpoint);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Example method to post data
  async post(endpoint, data) {
    try {
      const response = await this.api.post(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Example method to put data
  async put(endpoint, data) {
    try {
      const response = await this.api.put(endpoint, data);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // Example method to delete data
  async delete(endpoint) {
    try {
      const response = await this.api.delete(endpoint);
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  // General error handling method
  handleError(error) {
    // Log or handle error
    console.error("API call failed. Error: ", error);
    throw error; // Re-throw to let calling code handle it further if necessary
  }
}

export default ApiService;
