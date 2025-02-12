import axios from 'axios';

const API_URL = 'https://67a98e496e9548e44fc3f738.mockapi.io/api/salik/users';

export async function registerUser(userData) {
  try {
    const response = await axios.post(API_URL, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

export async function loginUserApi(userData) {
  try {
    const response = await axios.post(`${API_URL}/login`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
}
