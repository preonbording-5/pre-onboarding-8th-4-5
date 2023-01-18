import { RootState } from './index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllComments } from '../api/commentApi';
import { commentDataType } from '../types/types';

interface dataType {
  data: commentDataType[];
}

export const getAllCommentsData = createAsyncThunk(
  'getAllCommentsData',
  async () => {
    const response = await getAllComments();
    return response.data;
  }
);

const initialState: dataType = {
  data: [{ author: '', content: '', createdAt: '', id: 0, profile_url: '' }],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCommentsData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const commentsData = (state: RootState) => state.commentSlice.data;
export default commentsSlice.reducer;
