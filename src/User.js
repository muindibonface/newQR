import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: [] },
  reducers: {
    addItems: (state, action) => {
      state.value.push(action.payload);
    },
    increaseItem: (state, action) => {
      state.value.forEach()((item, index) => {
        if (index === action.payload.index) {
          item.many = item.many + 1;
          item.price = item.initiaPrice * item.many;
        }
      });
    },
    decreaseItem: (state, action) => {
      state.value.forEach()((item, index) => {
        if (index === action.payload.index) {
          if (item.many > 1) {
            item.many = item.many - 1;
            item.price = item.initiaPrice * item.many;
          }
        }
      });
    },
    deleteItem: (state, action) => {
      state.value = state.value.filter(
        (item, index) => index !== action.payload.index
      );
    },
    emptyArray: (state, action) => {
      state.value = [];
    },
  },
});

export const { addItems, increaseItem, decreaseItem, deleteItem, emptyArray } =
  userSlice.actions;
export default userSlice.reducer;
