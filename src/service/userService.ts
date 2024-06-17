import api from './apiService';

// Function to fetch user data by ID
export const fetchUser = async (id: number) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

// Function to update user data by ID
export const updateUser = async (id: number, userData: any) => {
  const response = await api.put(`/users/${id}`, userData);
  return response.data;
};
