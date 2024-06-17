import axios from 'axios';

const api = axios.create({
  baseURL: 'api',
});

export const get = async (url: string, params = {}) => {
  const response = await api.get(url, { params });
  return response.data;
};

export const post = async (url: string, data: any) => {
  const response = await api.post(url, data);
  return response.data;
};

export default api;