import { RootState } from './index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageState {
  totalPage: number;
  currentPage: number;
}

const initialState: PageState = { totalPage: 1, currentPage: 1 };

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setTotalPage: (state, action: PayloadAction<{ totalPage: number }>) => {
      state.totalPage = action.payload.totalPage;
    },
    setCurrentPage: (state, action: PayloadAction<{ currentPage: number }>) => {
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const { setTotalPage, setCurrentPage } = pageSlice.actions;
export const totalPage = (state: RootState) => state.pageSlice.totalPage;
export const currentPage = (state: RootState) => state.pageSlice.currentPage;
export default pageSlice.reducer;
