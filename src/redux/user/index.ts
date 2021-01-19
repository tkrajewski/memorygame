import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    nickname: '',
  },
  reducers: {
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
  },
})

export const { setNickname } = userSlice.actions

export const selectNickname = (state: any) => state?.user?.nickname;

export default userSlice.reducer;
