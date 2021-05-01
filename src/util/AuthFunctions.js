import axios from 'axios';

export const authLogin = async (username, password) => {
  const resTwo = await axios({
    method: 'POST',
    data: {
      username,
      password,
    },
    withCredentials: true,
    url: '/api/auth/login',
  });
  return resTwo.data;
};
