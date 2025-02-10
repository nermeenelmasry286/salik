import axios from 'axios';

export async function registerUser(userData) {
  const users = 'https://67a98e496e9548e44fc3f738.mockapi.io/api/salik/users';
  try {
    const response = await axios.post(users, userData, {
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
