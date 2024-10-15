import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null, // начальное значение для userId
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

// Экспортируйте все необходимые действия и состояния.
export const { setUserId } = userDataSlice.actions;
export default userDataSlice.reducer;