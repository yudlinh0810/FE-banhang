import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  name: '',
  access_token: '',
};

export const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { name, email, access_token } = action.payload;
      state.name = name ? name : state.name;
      state.email = email ? email : state.email;
      state.access_token = access_token ? access_token : state.access_token;
    },
    resetUser: (state) => {
      state.name = '';
      state.email = '';
      state.access_token = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions;

export default userSlide.reducer;
