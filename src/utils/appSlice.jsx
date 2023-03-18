import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    togglesMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { togglesMenu } = appSlice.actions;
export default appSlice.reducer;
