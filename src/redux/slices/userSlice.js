import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  email: '',
  name: '',
  phone: '',
  address: '',
  avatar: '',
  access_token: '',
  isAdmin: false,
  // isLoading: false,
};

export const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const {
        _id = '',
        name = '',
        email = '',
        address = '',
        phone = '',
        avatar = '',
        access_token,
        isAdmin,
      } = action.payload;
      state.id = _id;
      state.name = name;
      state.email = email;
      state.address = address;
      state.phone = phone;
      state.avatar = avatar;
      state.access_token = access_token;
      state.isAdmin = isAdmin;
    },
    resetUser: (state) => {
      state.name = '';
      state.email = '';
      state.address = '';
      state.phone = '';
      state.avatar = '';
      state.id = '';
      state.access_token = '';
      state.isAdmin = false;
      state.city = '';
      // state.refreshToken = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions;

export default userSlide.reducer;
