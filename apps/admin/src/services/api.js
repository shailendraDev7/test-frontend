import axios from 'axios';

// 1. Create axios instance with basic config
const baseURL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 2. Add auth token automatically
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// 3. Simplify error handling
api.interceptors.response.use(
  response => response.data,
  error => {
    const errorMessage = error.response?.data?.message ||
                         error.message ||
                         'Network Error';
    console.error('API Error:', errorMessage);
    return Promise.reject(errorMessage);
  }
);

// 4. Export direct methods (no wrapper object)
export const get = (endpoint, params, config) =>
  api.get(endpoint, { params, ...config });

// Generic GET by ID function
export const getById = (resource, id, config = {}) => {
  return api.get(`/${resource}/${id}`, config)
    .then(response => response)
    .catch(error => {
      throw new Error(error.response?.data?.message || 'Resource not found');
    });
};

export const post = (endpoint, data, config) =>
  api.post(endpoint, data, config);

export const put = (endpoint, data, config) =>
  api.put(endpoint, data, config);

export const patch = (endpoint, data, config) =>
  api.patch(endpoint, data, config);

export const del = (endpoint, config) =>
  api.delete(endpoint, config);

// Optional: Export raw axios instance for special cases
export const apiInstance = api;

export default {
  get,
  post,
  put,
  patch,
  del
};