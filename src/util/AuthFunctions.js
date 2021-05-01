import axios from 'axios';

export const authLogin = async (username, password) => {
  const resTwo = await axios({
    method: 'POST',
    data: {
      username,
      password,
    },
    withCredentials: true,

    url: 'https://rocky-thicket-98577.herokuapp.com/auth/login',
  });
  return resTwo.data;
};
