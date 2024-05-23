import axios from 'axios';

export const axiosJwt = axios.create();

export const loginUser = async (data) => {
  const res = await axios.post(`http://localhost:3001/api/user/sign-in`, data);
  // console.log('res-cookie', res.headers['set-cookie']);
  // const setCookieHeader = res.headers['set-cookie'];
  // if (setCookieHeader) {
  //   const cookies = {};
  //   setCookieHeader.forEach((cookieString) => {
  //     const cookieParts = cookieString.split(';');
  //     const [name, value] = cookieParts[0].split('=');
  //     cookies[name.trim()] = value.trim();
  //   });
  //   localStorage.setItem('myCookies', JSON.stringify(cookies));
  // }
  return res.data;
};
export const signUpUser = async (data) => {
  const res = await axios.post(`http://localhost:3001/api/user/sign-up`, data);
  return res.data;
};

export const getDetailsUser = async (id, access_token) => {
  const res = await axiosJwt.get(`http://localhost:3001/api/user/get-details/${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

export const refreshToken = async (refreshToken) => {
  const res = await axios.post(
    `http://localhost:3001/api/user/refresh-token`,
    { withCredentials: true },
    {
      headers: {
        token: `Bearer ${refreshToken}`,
      },
    }
  );
  return res.data;
};
export const logoutUser = async () => {
  return axios.post(`http://localhost:3001/api/user/log-out`);
};
