import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { isJsonString } from './utils';
import * as UserService from './service/UserService';
import { useDispatch } from 'react-redux';
import { updateUser } from './redux/slices/userSlice';
import jwt_decode from 'jwt-decode';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let storageData = localStorage.getItem('access_token');
    console.log('storageData1', storageData, isJsonString(storageData));
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      const decoded = jwt_decode(storageData);
      console.log('decode', decoded);
      const id = decoded?.id;
      console.log('id', id);
      if (id) {
        console.log('id, token', id, storageData);
        handleGetDetailUser(decoded?.id, storageData);
      }
    }
    console.log('storageData', storageData);
  });

  const handleGetDetailUser = (id, token) => {
    const res = UserService.getDetailsUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
