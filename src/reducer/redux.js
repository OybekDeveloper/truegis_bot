import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  defLang: "",
};
export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setDefLang: (state, action) => {
      state.defLang = action.payload;
    },
  },
});

export const { setDefLang } = eventsSlice.actions;
export default eventsSlice.reducer;
