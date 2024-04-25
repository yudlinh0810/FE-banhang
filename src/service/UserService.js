import axios from 'axios';

export const axiosJWT = axios.create();
const api = process.env.REACT_APP_API_URL;

export const loginUser = async (data) => {
  console.log('test:', api);
  // const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-in`, data);
  const res = await axios.post(`http://localhost:3001/api/user/sign-in`, data);

  return res.data;
};
export const signUpUser = async (data) => {
  console.log('env:', api);
  // const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/sign-up`, data);
  const res = await axios.post(`http://localhost:3001/api/user/sign-up`, data);
  return res.data;
};

export const getDetailsUser = async (id, access_token) => {
  console.log('env:', api);
  const res = await axios.get(`http://localhost:3001/api/user/get-details/${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

export const refreshToken = async () => {
  console.log('env:', api);
  const res = await axios.post(`http://localhost:3001/api/user/refresh-token`, {
    withCredentials: true,
  });
  return res.data;
};
