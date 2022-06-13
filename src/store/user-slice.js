import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reducers: {
    addUsers(state, action) {
      state.data = action.payload;
    },
  },
});

export const userActions = usersSlice.actions;
export default usersSlice;
