import axios from 'axios';

const API_URL = 'http://localhost:3000/users';

export const createUser = async (userData) => {
  return await axios.post(API_URL, userData);
};

export const fetchUsers = async () => {
  return await axios.get(API_URL);
};

export const fetchUser = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const updateUser = async (id, userData) => {
  return await axios.put(`${API_URL}/${id}`, userData);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
