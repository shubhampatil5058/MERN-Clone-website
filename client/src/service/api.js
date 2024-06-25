import axios from 'axios';

const baseURL = 'https://mern-clone-website.vercel.app'; 

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000, // Timeout set to 10 seconds
});

export const authenticateLogin = async (user) => {
  try {
    const response = await api.post('/login', user);
    return response.data;
  } catch (error) {
    console.error('Error while calling login API:', error);
    throw error; // Rethrow or handle the error as needed
  }
};

export const authenticateSignup = async (user) => {
  try {
    const response = await api.post('/signup', user);
    return response.data;
  } catch (error) {
    console.error('Error while calling Signup API:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/product/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error while getting product by id response:', error);
    throw error;
  }
};
