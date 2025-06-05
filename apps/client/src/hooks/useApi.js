import { useState, useCallback, useEffect } from 'react';
import api from '../services/api';

export const useApi = (baseEndpoint) => {
  console.log('Inside USEAPI',baseEndpoint);
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null
  });

  const makeRequest = useCallback(async (method, options = {}) => {
    const { id = '', data = null, params = {}, config = {} } = options;
    const endpoint = id ? `${baseEndpoint}/${id}` : baseEndpoint;
    

    console.log('Inside makerequest',baseEndpoint);
    console.log('Inside makerequest endpoint',endpoint);
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      let response;
      switch (method) {
        case 'get':
          response = await api.get(endpoint, { params, ...config });
          break;
        case 'post':
          response = await api.post(endpoint, data, config);
          break;
        case 'put':
          response = await api.put(endpoint, data, config);
          break;
        case 'patch':
          response = await api.patch(endpoint, data, config);
          break;
        case 'delete':
          response = await api.delete(endpoint, config);
          break;
        default:
          throw new Error(`Unsupported method: ${method}`);
      }

      setState(prev => ({ ...prev, data: response.data, loading: false }));
      console.log('Data before return in makerequest',response.data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
      setState(prev => ({ ...prev, error: errorMessage, loading: false }));
      throw error;
    }
  }, [baseEndpoint]);

  // Return methods with consistent naming
  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    get: (params, config) => makeRequest('get', { params, config }),
    getById: (id, config) => makeRequest('get', { id, config }),
    create: (data, config) => makeRequest('post', { data, config }),
    update: (id, data, config) => makeRequest('put', { id, data, config }),
    patch: (id, data, config) => makeRequest('patch', { id, data, config }),
    remove: (id, config) => makeRequest('delete', { id, config })
  };
};