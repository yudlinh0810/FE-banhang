import axios from './CustomizeAxios';

export const axiosJwt = axios.create();

export const loginUser = async (data) => {
  return axios.post(`user/sign-in`, data);
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
};
export const signUpUser = async (data) => {
  const res = await axios.post(`/user/sign-up`, data);
  return res.data;
};

export const getDetailsUser = async (id, access_token) => {
  const res = await axiosJwt.get(`/user/get-details/${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

export const refreshToken = async (refreshToken) => {
  const res = await axios.post(
    `/user/refresh-token`,
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
  return axios.get(`/user/log-out`);
};
