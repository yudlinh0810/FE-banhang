import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  email: '',
  name: '',
  access_token: '',
};

export const userSlide = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { _id, name, email, access_token } = action.payload;
      state.id = _id;
      state.name = name || email;
      state.email = email;
      state.access_token = access_token;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser } = userSlide.actions;

export default userSlide.reducer;
